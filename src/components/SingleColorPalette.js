import React, {useState, useEffect} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteStyles'
import { withStyles } from '@material-ui/styles';



function SingleColorPalette(props) {
    const [type, setType] = useState('hex')
    const [open, setOpen] = useState(false)
    const {paletteName, emoji} = props.palette
    const {classes} = props
    const [colors, setColors] = useState([])

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const handleClose = () => {
    setOpen(false);
    };
    
    useEffect(() => {
        getShades()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const getShades = () => {
        let arr = []
        for (let x in props.palette.colors){
            arr = arr.concat(
                props.palette.colors[x].filter(
                    (color) => color.id === props.route.match.params.palette)
            )
        }
        setColors(arr.slice(1))
    }
    const colorBoxes = colors.map((color) => (
        <ColorBox key={color.hex} background={color[type]} name={color.name} id={color.id} route={props.route} showFullPalette={false}/>
        ))

    return(
        <div className={classes.Palette}>
            <Navbar 
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
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link to={`/Palette/${props.route.match.params.id}`} className='back-button'>
                    GO BACK
                    </Link> 
                </div>
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} classes={classes}/>
        </div>
    )
}

export default withStyles(styles)(SingleColorPalette)