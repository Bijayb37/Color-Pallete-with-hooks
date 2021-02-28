import React, {useState, useEffect} from 'react'
import { ChromePicker } from 'react-color';
import { Button} from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { withStyles } from '@material-ui/styles';

const styles = {
  picker: {
    width: "100% !important",
    marginTop: "2rem"
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    fontSize: "2rem"
  },
  colorNameInput: {
    width: "100%",
    height: "70px"
  },
};

function ColorPickerForm(props) {
    const [newColor, setNewColor] = useState("#FF0000")
    const [colorName, setColorName] = useState("")

    const {boxes, setBoxes, classes} = props
    const paletteFull = boxes.length >= 20  
    
    const changeColor = (e) => {
        setNewColor(e.hex)
      }
    
    const handleChange = (event, type) => {
        if (type === "name")
          setColorName(event.target.value)
      }

    const createColorBox = () => {
        setBoxes([...boxes, {name: colorName, color: newColor}])
        setColorName("")
      }

      useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
          boxes.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          )
        )
        ValidatorForm.addValidationRule("isColorUnique", value =>
          boxes.every(({ color }) => color !== newColor)
        )
      }, [boxes, newColor])
      
    return(
        <div>
            <ChromePicker className={classes.picker} color={newColor} onChangeComplete={changeColor} />
            <ValidatorForm onSubmit={createColorBox} instantValidate={false}>
                <TextValidator 
                    value={colorName}
                    label='Color Name'
                    variant="filled"
                    margin="normal"
                    className={classes.colorNameInput}
                    onChange={(e) => handleChange(e, "name")}
                    validators={["required", "isColorNameUnique", "isColorUnique"]}
                    errorMessages={[
                        "Enter a color name",
                        "Color name must be unique",
                        "Color already used!"
                    ]}
                    />
                <Button className={classes.addColor} disabled={paletteFull} variant="contained" color="primary" style={{background: paletteFull ? "grey" : newColor }} type="submit">
                    Add Color
                </Button>
            </ValidatorForm> 
        </div>
    )
}

export default  withStyles(styles)(ColorPickerForm)