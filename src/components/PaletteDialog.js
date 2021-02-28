import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import { withStyles } from '@material-ui/styles';

const styles = {
    yes: {
        backgroundColor: red[100],
        color: red[600],
    },
    no: {
        backgroundColor: green[100],
        color: green[600],
    },

}

function PaletteDialog(props) {
    const {open, handleClickDelete, handleClose, classes} = props
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="delete-dialog-title" open={open}>
        <DialogTitle id="delete-dialog-title">Delete Palette</DialogTitle>
        <List>
            <ListItem button onClick={handleClickDelete} >
              <ListItemAvatar>
                <Avatar className={classes.yes}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete Palette" />
            </ListItem>
          <ListItem autoFocus button onClick={handleClose}>
            <ListItemAvatar>
              <Avatar className={classes.no}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    );
  }

  export default withStyles(styles)(PaletteDialog)