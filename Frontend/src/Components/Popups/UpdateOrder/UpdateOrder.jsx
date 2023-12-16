import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
 } from "@mui/material";
 import styles from "./UpdateOrder.module.css";
 import { useContext, useState } from "react";
 import { AppContext } from "../../../Context/AppContext";


 const UpdateOrder = ({ open, handleClose,element }) => {
  const [orderStatus, setOrderStatus] = useState("");
  const {handleUpdateStatus} = useContext(AppContext)
  const handleSelect = (event) => {
    setOrderStatus(event.target.value);
  };


  const handleUpdate = async()=>{
    console.log(orderStatus);
    const payload = {
      customerUserId:element.userId,
      orderId:element._id,
      newStatus:orderStatus
    }
    let res = await handleUpdateStatus(payload);
    if(res==200){
        alert('Order Status Updated Successfully');
        handleClose()
    }else{
        alert('FAILED TO UPDATE ORDER STATUS')
    }
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>UPDATE STATUS</DialogTitle>
      <DialogContent>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={orderStatus}
              label="Status"
              onChange={handleSelect}
            >
              <MenuItem value={"order place"}>Order Placed</MenuItem>
              <MenuItem value={"shipped"}>Shipped </MenuItem>
              <MenuItem value={"dispatched"}>Dispatched</MenuItem>
              <MenuItem value={"out for delivery"}>Out For Delivery</MenuItem>
              <MenuItem value={"delivered"}>Delivered</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleUpdate} variant="contained">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
 };


 export default UpdateOrder;





