import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import styles from './styles/NavbarStyles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'


function Navbar(props) {
    const {level, setLevel, type, setType, setOpen, classes} = props;
    
    return(
         <header className={classes.Navbar}>
             <div className={classes.logo}>
                <Link to="/">React Color Picker</Link>
             </div>
             {level && <div>
                 <span className={classes.level}>Level: {level}</span>
                <div className={classes.slider}>
                    <Slider 
                        onAfterChange={setLevel}
                        defaultValue={level} 
                        min={100} 
                        max={900} 
                        step={100}
                    />
                </div> 
            </div>}
            <div className={classes.selectContainer}>
               <Select value={type} onChange={(e) => {setType(e.target.value); setOpen(true)}}>
                   <MenuItem value='hex'>HEX</MenuItem>
                   <MenuItem value='rgb'>RGB</MenuItem>
                   <MenuItem value='rgba'>RGBA</MenuItem>
               </Select>
            </div>
         </header>
    )
}

export default withStyles(styles)(Navbar)