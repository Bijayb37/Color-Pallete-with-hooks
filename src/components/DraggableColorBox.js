import { withStyles } from '@material-ui/styles'
import React from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles'

function DraggableColorBox(props) {
    const {classes, name, color, deletePalette} = props
    return(
        <div className={classes.root} style={{backgroundColor: color }}>    
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.delete} onClick={() => deletePalette(name)}/>
            </div>
        </div>
    )
}

export default SortableElement(withStyles(styles)(DraggableColorBox))