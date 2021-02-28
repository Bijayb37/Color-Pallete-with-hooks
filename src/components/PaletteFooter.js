import React from 'react'

export default function PaletteFooter(props) {
    const {paletteName, emoji, classes} = props
    return(
        <footer className={classes.PaletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji} </span>
        </footer>
    )
}