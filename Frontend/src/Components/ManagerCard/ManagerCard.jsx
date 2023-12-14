import React from 'react'
import {Box,Button} from "@mui/material"
import styles from "./ManagerCard.module.css"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditOrAddProductPopup from '../Popups/EditOrAddProductPopup/EditOrAddProductPopup';
const ManagerCard = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={styles.container}>
      <Box className={styles.imagebox}>
        <img
          className={styles.imageboxImg}
          src="https://rukminim2.flixcart.com/image/416/416/l4ln8nk0/pedicure-kit/w/p/c/63-manicure-pedicure-aloe-vera-6-step-single-use-kit-6-sachets-original-imagfgh9uwfmhdte.jpeg?q=70"
          alt=""
        />
      </Box>
      <Box className={styles.descBox}>
        RAAGA PROFESSIONAL Manicure & Pedicure | Aloe Vera | 6 Step Single Use
        Kit | 6 Sachets, 63 g (63 g, Set of 1)
      </Box>
      <Box className={styles.descrBox}>AvailableQuantity:</Box>
      <Box className={styles.descrBox}>Weight:</Box>
      <Box className={styles.descrBox}>RS:</Box>
      <Box className={styles.addtocartBox} onClick={handleClickOpen}>EDIT</Box>
      <EditOrAddProductPopup open={open} handleClose={handleClose} placeofcall={"EDIT"}/>
      <Box className={styles.addtocartBox}>DELETE</Box>
    </Box>
  )
}

export default ManagerCard