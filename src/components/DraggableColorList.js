import { withStyles } from '@material-ui/styles'
import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import DraggableColorBox from './DraggableColorBox'

const styles = {
    root: {
        height: "100%"
    }
}

function DraggableColorList(props) {
    const {colors, deletePalette, classes} = props
    return(
    <div className={classes.root}>
    {colors.map((color,i) => (
      <DraggableColorBox 
        index={i}
        key={color.name}
        color={color.color} 
        name={color.name} 
        deletePalette={deletePalette}
      />
    ))}
        </div>
    )
}

export default SortableContainer(withStyles(styles)(DraggableColorList))