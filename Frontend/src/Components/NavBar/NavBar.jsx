import { Box, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import styles from "./NavBar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import Cookies from "js-cookie";


const NavBar = ({ placeofcall }) => {
 const navigate = useNavigate();
 let token = Cookies.get("token");
 let user = JSON.parse(localStorage.getItem("user"));
 const { cartdata } = useContext(AppContext);


 const handleLogout = () => {
   localStorage.removeItem("user");
   document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
   navigate("/login");
 };
 return (
   <Box className={styles.navbox}>
     <Box
       onClick={() => {
         let user = JSON.parse(localStorage.getItem("user"));
         if (user?.usertype == "customer") {
           navigate("/");
         } else {
           navigate("/manager");
         }
       }}
       className={styles.imgBox}
     >
       <img
         className={styles.imgBoxImg}
         // src="data:image/png;base64,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"
         src="https://assets-global.website-files.com/6284afcd3c8fe34dca52d136/62bfd7e69c25897f423bcdac_TechEagle%20new%20logo.svg"
         alt=""
       />
     </Box>
     <Box className={styles.cartbox}>
       {!token && (
         <Box
           onClick={() => {
             navigate("/login");
           }}
         >
           Login
         </Box>
       )}
       {!token && (
         <Box
           onClick={() => {
             navigate("/signup");
           }}
         >
           Signup
         </Box>
       )}
       {placeofcall != "login" &&
         placeofcall != "signup" &&
         user?.usertype == "customer" && (
           <Box className={styles.countBox}>
             <ShoppingCartIcon
               onClick={() => {
                 navigate("/cart");
               }}
             />
             <Box>{cartdata.length}</Box>
           </Box>
         )}
       {placeofcall != "login" &&
         placeofcall != "signup" &&
         user?.usertype == "customer" && (
           <Box
             onClick={() => {
               navigate("/orders");
             }}
           >
             My Orders
           </Box>
         )}
       {placeofcall != "login" &&
         placeofcall != "signup" &&
         user?.usertype == "manager" && <Box onClick={()=>{
           navigate('/allOrders')
         }} >All Orders</Box>}
       {placeofcall != "login" && placeofcall != "signup" && (
         <Button onClick={handleLogout} variant="contained">
           Logout
         </Button>
       )}
     </Box>
   </Box>
 );
};
export default NavBar;



