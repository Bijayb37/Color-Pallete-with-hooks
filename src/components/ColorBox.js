import React, {useState} from 'react'
import './ColorBox.css'
import Copy from 'react-copy-to-clipboard'
import {withStyles} from "@material-ui/styles"
import styles from "./styles/ColorBoxStyles"
import { Link } from 'react-router-dom'
import clsx from 'clsx';

function ColorBox(props) {

    const { name, background, id, showFullPalette, classes} = props
    const [copied, setCopied] = useState(false)
    const {id: urlId} = props.route.match.params

    return(
        <div style={{background}} className={classes.ColorBox}>
            <div style={{background}} className={clsx(classes.copyOverlay, {[classes.showOverlay]: copied,})}/>
            <div className={clsx(classes.copyMessage, {
              [classes.showMessage]: copied,
            })}>
                <h1>Copied</h1>
                <p className={classes.copyText}>{background}</p>
            </div>
            <div  className="copy-container">
                <div className={classes.boxContent}>
                    <span className={classes.colorText}>{name}</span>
                </div>
                <Copy text={background} 
                    onCopy={() => {setCopied(true); setTimeout(() => setCopied(false), 1500)}}>
                    <button className={classes.copyButton}>Copy</button>
                </Copy>
            </div>
            {showFullPalette && (
                <Link to={`/Palette/${urlId}/${id}`}>
                    <span className={classes.moreButton}>More</span>
                </Link>
            )}
        </div>
    )
}

export default withStyles(styles)(ColorBox)