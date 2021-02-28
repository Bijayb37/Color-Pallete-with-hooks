import React, {useState} from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/styles';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const styles = {
    valid: {
        display: "flex",
        alignItems: "center",
        margin: "10px"
      }
}

function PaletteMetaForm(props) {
    const {handleChange, newPaletteName, classes, handleSubmit} = props
    const [open, setOpen] = useState(false);
    const [emojiOpen, setEmojiOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setEmojiOpen(false);
    };

    const emojiSubmit = (e) => {
        handleClose()
        handleSubmit(e, newPaletteName)
    }

  
    return(
        <div>
            <Button type="submit" onClick={handleClickOpen} variant='contained' color='primary' >
                Create New Palette
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
                <ValidatorForm className={classes.valid} onSubmit={()=> setEmojiOpen(true)}>  
                    <DialogContent>
                    <DialogContentText>
                        Enter a name for your palette make sure it is unique
                    </DialogContentText>
                        <TextValidator
                            label='Palette Name'
                            value={newPaletteName}
                            name='newPaletteName'
                            onChange={handleChange}
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter Palette Name", "Name already used"]}
                            fullWidth
                            margin="normal"
                        />   
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Save
                            </Button>
                        </DialogActions>   
                    </DialogContent>
                    <Dialog open={emojiOpen}>
                        <DialogTitle id="emoji-dialog-title">Choose An Emoji</DialogTitle>
                        <Picker title="Pick An Emoji" onSelect={(e) => emojiSubmit(e)} />
                    </Dialog>
                </ValidatorForm> 
            </Dialog>  
            </div>
    )
}
export default withStyles(styles)(PaletteMetaForm)