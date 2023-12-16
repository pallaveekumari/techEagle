import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
   } from "@mui/material";
   import styles from "./EditQuantityByManager.module.css";
   import { useContext, useEffect, useState } from "react";
   import { AppContext } from "../../../Context/AppContext";
   
   
   const EditQuantityByManager = ({ open, handleClose, initialQty, prodId }) => {
    const [qty, setQty] = useState(initialQty);
    const { handleUpdateQuantityByManager, getProductdata } =
      useContext(AppContext);
    const handleChange = (val) => {
      setQty(val);
    };
   
   
    const handleUpdateQty = async () => {
      let res = await handleUpdateQuantityByManager(prodId, qty);
      if (res == 200) {
        await getProductdata();
        alert("QUANTITY UPDATED SUCCESSFULLY");
        handleClose();
      } else {
        alert("FAILED TO UPDATE QTY");
      }
    };
   
   
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Quantity</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Quantity"
            type="number"
            fullWidth
            variant="outlined"
            value={qty}
            onChange={(e) => handleChange(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateQty}>Submit</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    );
   };
   
   
   export default EditQuantityByManager;
   
   
   
   