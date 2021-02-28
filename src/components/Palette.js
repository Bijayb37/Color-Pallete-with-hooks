import React, {useState} from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import Navbar from './Navbar'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PaletteFooter from './PaletteFooter';
import styles from "./styles/PaletteStyles";
import { withStyles } from '@material-ui/styles';


function Palette(props) {
    const [level, setLevel] = useState(500)
    const [type, setType] = useState('hex')
    const [open, setOpen] = useState(false)
    const {paletteName, emoji} = props.palette
    const {classes} = props

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const handleClose = () => {
    setOpen(false);
    };

    const colorBoxes = props.palette.colors[level].map((color) => (
        <ColorBox key={color.id} background={color[type]} name={color.name} id={color.id} route={props.route} showFullPalette/>
    ))
    
    return(
        <div className={classes.Palette}>
            <Navbar 
                level={level} 
                setLevel={setLevel} 
                type={type} 
                setType={setType} 
                open={open}
                setOpen={setOpen}
            />
            <div className="Snackbar-container">
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={open} autoHideDuration={6000} onClose={handleClose} >
                    <Alert onClose={handleClose} severity="success">
                    `Format Changed to {type.toUpperCase()}`
                    </Alert>
                </Snackbar>
            </div>
            <div className={classes.colors}>
            {<span>{colorBoxes}</span>}
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} classes={classes}/>
        </div>
    )
}

export default withStyles(styles)(Palette);