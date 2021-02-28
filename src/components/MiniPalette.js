import React, { useState } from 'react'
import {withStyles} from "@material-ui/styles"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "./styles/MiniPaletteStyles"
import PaletteDialog from './PaletteDialog';

function MiniPalette(props) {
    const [open, setOpen] = useState(false)
    const {classes, paletteName,id, emoji, colors, deletePalette} = props

    const maps = colors.map((c) =>
        <div className={classes.miniColor} key={c.name} style={{backgroundColor: c.color}}></div> 
    )
    const handleClick = () => {
        props.route.history.push(`/Palette/${id}`)
    }

    const handleClickEdit = (e) => {
        e.stopPropagation()
        props.route.history.push(`/edit/${id}`)
    }

    const handleClickDelete = (e) => {
        e.stopPropagation()
        setOpen(false)
        deletePalette(id)
    }

    const handleOpen = (e) => {
        e.stopPropagation()
        setOpen(true)
    }

    const handleClose = (e) => {
        e.stopPropagation()
        setOpen(false)
    }

    return(
        <div className={classes.root} onClick={handleClick}>
            <EditIcon className={classes.edit} onClick={handleClickEdit}/>
            <DeleteIcon className={classes.delete} onClick={handleOpen}/>
            <div className={classes.colors}>{maps}</div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
            <PaletteDialog open={open} handleClickDelete={handleClickDelete} handleClose={handleClose}/>
        </div>
    )
}


export default withStyles(styles)(MiniPalette)