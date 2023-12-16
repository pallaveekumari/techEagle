import React, { useContext } from "react";
import { Box } from "@mui/material";
import styles from "./ManagerCard.module.css";
import EditQuantityByManager from "../Popups/EditQuantityByManager/EditQuantityByManager";
import { AppContext } from "../../Context/AppContext";
const ManagerCard = ({ element }) => {
 const { handleDeleteProductByManager,getProductdata } = useContext(AppContext);
 const [openQtyPopup, setOpenQtyPopup] = React.useState(false);


 const handleClickOpenQtyPopup = () => {
   setOpenQtyPopup(true);
 };


 const handleCloseQtyPopup = () => {
   setOpenQtyPopup(false);
 };


 const handleDelete = async (prodId) => {
   let res = await handleDeleteProductByManager(prodId);
   console.log('res is ',res)
   if (res == 200) {
     alert("Product deleted successfully");
    await getProductdata()
   } else {
     alert("Failed to delete the product");
   }
 };
 return (
   <Box className={styles.container}>
     <Box className={styles.imagebox}>
       <img className={styles.imageboxImg} src={element.image} alt="" />
     </Box>
     <Box className={styles.descBox}>{element.name}</Box>
     <Box className={styles.descBox}>{element.description}</Box>
     <Box className={styles.descrBox}>AvailableQuantity:{element.qty}</Box>
     <Box className={styles.descrBox}>Weight:{element.weight}</Box>
     <Box className={styles.descrBox}>RS:{element.price}</Box>
     <Box className={styles.addtocartBox} onClick={handleClickOpenQtyPopup}>
       EDIT QUANTITY
     </Box>
     <EditQuantityByManager
       initialQty={element.qty}
       open={openQtyPopup}
       handleClose={handleCloseQtyPopup}
       prodId={element._id}
     />
     <Box
       className={styles.addtocartBox}
       onClick={() => {
         handleDelete(element._id);
       }}
     >
       DELETE
     </Box>
   </Box>
 );
};


export default ManagerCard;



