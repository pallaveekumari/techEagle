import React from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {Button} from "@mui/material"
import DialogTitle from '@mui/material/DialogTitle';
const EditOrAddProductPopup = ({open,handleClose,placeofcall}) => {
  return (
 
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{placeofcall=="EDIT"?"EDIT PRODUCT":"ADD PRODUCT"}</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Image"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Quantity"
            type="text"
            fullWidth
            variant="outlined"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Weight"
            type="text"
            fullWidth
            variant="outlined"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            type="text"
            fullWidth
            variant="outlined"
          />
          


        </DialogContent>
        <DialogActions>
          <Button>Submit</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
  
  )
}

export default EditOrAddProductPopup