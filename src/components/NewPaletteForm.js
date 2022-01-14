import React, { useState } from "react";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from './styles/NewFormStyles'
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DraggableColorList from './DraggableColorList'
import { arrayMove } from "react-sortable-hoc";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function NewPaletteForm(props) {
  const classes = useStyles();
  const { goBack, edit } = props
  const { id } = props.palette
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [boxes, setBoxes] = useState(props.palette.colors)
  const paletteFull = boxes.length >= 20

  const deletePalette = (name) => {
    setBoxes(boxes.filter((palette) => palette.name !== name))
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setBoxes((colors) =>
      arrayMove(colors, oldIndex, newIndex)
    )
  }

  const clearColors = () => {
    setBoxes([])
  }

  const addRandomColor = () => {
    const allColors = props.palettes.map(p => p.colors).flat();
    let isDuplicateColor = true
    let randomColor = "red"
    while (isDuplicateColor) {
      let rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = boxes.some(color => color.name === randomColor.name)
    }

    setBoxes([...boxes, randomColor]);
  }

  const handleSubmit = (emoji, newPaletteName) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: boxes,
      emoji: emoji.native
    };
    props.savePalette(newPalette);
    props.history.push("/");
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <PaletteFormNav palettes={props.palettes} classes={classes} open={open} handleSubmit={handleSubmit} handleDrawerOpen={handleDrawerOpen} goBack={goBack} edit={edit} boxes={boxes} id={id} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <div className={classes.container}>
          <Typography variant='h4' gutterBottom>
            Design Your Palette
            </Typography>
          <div className={classes.buttons}>
            <Button
              variant='contained'
              color='secondary'
              onClick={clearColors}
              className={classes.button}
            >
              Clear Palette
              </Button>
            <Button
              variant='contained'
              className={classes.button}
              color='primary'
              onClick={addRandomColor}
              disabled={paletteFull}
            >
              Random Color
              </Button>
          </div>
          <ColorPickerForm setBoxes={setBoxes} boxes={boxes} />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList distance={20} onSortEnd={onSortEnd} axis="xy" deletePalette={deletePalette} colors={boxes} />
      </main>
    </div>
  );
}

export default withRouter(NewPaletteForm)