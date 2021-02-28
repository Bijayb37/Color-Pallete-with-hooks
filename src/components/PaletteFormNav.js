import React, {useState, useEffect} from 'react'
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ValidatorForm } from 'react-material-ui-form-validator'
import PaletteMetaForm from './PaletteMetaForm';

export default function PaletteForm(props) {
    const {palettes, classes, open, handleSubmit, handleDrawerOpen, edit, goBack, boxes} = props
    const [newPaletteName, setNewPaletteName] = useState("")

    const handleChange = (event) => {
      setNewPaletteName(event.target.value)
    }
    useEffect(() => {
      ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(
      ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      ))
    }, [palettes])

    return( 
        <div>
          <CssBaseline />
          <AppBar 
            position="fixed"
            color="default"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.heading} variant="h6" noWrap>
                  Create A Palette
              </Typography>
            </Toolbar>
            <div className={classes.navBtns}>
              <Link style={{textDecoration: "none"}} to='/'>
                <Button variant='contained' color='secondary'>
                  Go Back
                </Button>
              </Link>
              {edit && <Button onClick={() => goBack(props.id, boxes)} variant='contained' color='secondary'>
                  Save Palette
                </Button>}
              <PaletteMetaForm handleSubmit={handleSubmit} handleChange={handleChange} newPaletteName={newPaletteName} />
          </div>
          </AppBar>
        </div>
    )
}