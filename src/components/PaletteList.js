import React from 'react'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import styles from './styles/PaletteListStyles'

function PaletteList(props) {
    const {palettes, classes, route, deletePalette} = props
    console.log(route)

    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <Link to="/"><h1>React Colors</h1></Link>
                    <Link to="/new"><h1>Create New Palette</h1></Link>
                </nav>  
                <div className={classes.palettes}>
                  {palettes.map((palette) => 
                        <MiniPalette key={palette.id} {...palette} deletePalette={deletePalette} route={route} />
                        )}
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(PaletteList)


