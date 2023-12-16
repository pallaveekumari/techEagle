import { Box, CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";
import styles from "./EachCard.module.css";
import { AppContext } from "../../Context/AppContext";
import TrackOrder from "../Popups/TrackOrder/TrackOrder";
import UpdateOrder from "../Popups/UpdateOrder/UpdateOrder";
const EachCard = ({ el, placeofcall }) => {
 const {
   handleAddToCart,
   handleqty,
   handleGetAllCartData,
   handleDeleteData,
   getOrderStatus,
 } = useContext(AppContext);
 const [openTrackOrder, setOpenTrackOrder] = useState(false);
 const [openUpdateOrder, setOpenUpdateOrder] = useState(false);
 const handleOpenTrackOrderPopup = () => {
   setOpenTrackOrder(true);
 };
 const handleOpenUpdateOrderPopup = () => {
   setOpenUpdateOrder(true);
 };
 const handleCloseTrackOrderPopup = () => {
   setOpenTrackOrder(false);
 };
 const handleCloseUpdateOrderPopup = () => {
   setOpenUpdateOrder(false);
 };
 return (
   <Box className={styles.container}>
     <Box className={styles.imagebox}>
       <img className={styles.imageboxImg} src={el.image} alt="" />
     </Box>
     <Box className={styles.descBox}>Name: {el.name}</Box>
     <Box className={styles.descBox}>Desc: {el.description}</Box>


     <Box className={styles.descrBox}>Weight: {el.weight}</Box>
     <Box className={styles.descrBox}>RS: {el.price}</Box>
     {placeofcall == "cartpage" && (
       <Box className={styles.qtyBox}>
         <Box
        
           onClick={async () => {
            if(el.qty==1){

            }
            else{

              let response = await handleqty(el._id, -1);
              if (response.status) {
                handleGetAllCartData();
              }
            }}
          }
         >
           -
         </Box>
         <Box>{el.qty}</Box>


         <Box
           onClick={async () => {
             let response = await handleqty(el._id, 1);
             if (response.status) {
               handleGetAllCartData();
             }
           }}
         >
           +
         </Box>
       </Box>
     )}


     {placeofcall == "homepage" && (
       <Box
         className={styles.addtocartBox}
         onClick={async () => {
           let res = await handleAddToCart(el);


           alert(res.msg);
         }}
       >
         Add To Cart
       </Box>
     )}


     {placeofcall == "cartpage" && (
       <Box
         className={styles.addtocartBox}
         onClick={async () => {
           let response = await handleDeleteData(el._id);
           if (response.status == true) {
             alert(response.msg);
             handleGetAllCartData();
           } else {
             alert(response.msg);
           }
         }}
       >
         DELETE
       </Box>
     )}


     {placeofcall == "orderpage" && (
       <Box
         onClick={async () => {
           let res = await getOrderStatus(el._id);
           if (res == 200) {
             handleOpenTrackOrderPopup();
           } else {
             alert("Something Went Wrong !...");
           }
         }}
         className={styles.addtocartBox}
       >
         Track Status{" "}
       </Box>
     )}


     {placeofcall == "allorders" && (
       <Box
         onClick={async () => {
           handleOpenUpdateOrderPopup();
         }}
         className={styles.addtocartBox}
       >
         Update Status{" "}
       </Box>
     )}


     <TrackOrder
       open={openTrackOrder}
       handleClose={handleCloseTrackOrderPopup}
     />
     <UpdateOrder
       element={el}
       open={openUpdateOrder}
       handleClose={handleCloseUpdateOrderPopup}
     />
   </Box>
 );
};


export default EachCard;



