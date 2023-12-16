import { Box } from "@mui/material";
import styles from "./CardForOrder.module.css";
import { useContext, useState } from "react";
import TrackOrder from "../Popups/TrackOrder/TrackOrder";
import UpdateOrder from "../Popups/UpdateOrder/UpdateOrder";
import { AppContext } from "../../Context/AppContext";


const CardForOrder = ({ element, placeOfCall }) => {
   const [openTrackOrder,setOpenTrackOrder] = useState(false);
   const [openUpdateOrder,setOpenUpdateOrder] = useState(false);
   const {getOrderStatus} = useContext(AppContext)
   const handleOpenTrackOrderPopup = ()=>{
       setOpenTrackOrder(true)
   }
   const handleOpenUpdateOrderPopup = ()=>{
       setOpenUpdateOrder(true)
   }
   const handleCloseTrackOrderPopup = ()=>{
       setOpenTrackOrder(false);
   }
   const handleCloseUpdateOrderPopup = ()=>{
       setOpenUpdateOrder(false);
   }
 return (
   <Box className={styles.container}>
     <Box className={styles.imagebox}>
       <img className={styles.imageboxImg} src={element.image} alt="" />
     </Box>
     <Box className={styles.descBox}>{element.name}</Box>
     <Box className={styles.descBox}>{element.description}</Box>


     <Box className={styles.descrBox}>Weight:{element.weight}</Box>
     <Box className={styles.descrBox}>Quantity:{element.qty}</Box>
     <Box className={styles.descrBox}>RS:{element.price}</Box>
     {placeOfCall == "managerDashboard" && (
       <Box className={styles.addtocartBox} onClick={handleOpenUpdateOrderPopup} >Update Status</Box>
     )}
     {placeOfCall == "customerOrders" && (
       <Box className={styles.addtocartBox} onClick={async ()=>{
           await getOrderStatus(element._id)
           handleOpenTrackOrderPopup()
       }
       } >Track Status</Box>
     )}
     <TrackOrder open={openTrackOrder} handleClose={handleCloseTrackOrderPopup} />
     <UpdateOrder open={openUpdateOrder} handleClose={handleCloseUpdateOrderPopup} />
   </Box>
 );
};


export default CardForOrder;



