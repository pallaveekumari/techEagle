import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
 } from "@mui/material";
 import styles from "./TrackOrder.module.css";
 import { useContext } from "react";
 import { AppContext } from "../../../Context/AppContext";
 
 
 const TrackOrder = ({ open, handleClose }) => {
  const { statusOfOrder } = useContext(AppContext);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Product Status</DialogTitle>
      <DialogContent>
        <img src={statusOfOrder.image} alt="" />
        <Box className={styles.text} >Name : {statusOfOrder.name}</Box>
        <Box className={styles.text} > Desc : {statusOfOrder.description}</Box>
        <Box className={styles.text} >Qty : {statusOfOrder.qty}</Box>
        <Box className={styles.text} > status :{statusOfOrder.status}</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
 };
 
 
 export default TrackOrder;
 
 
 
 