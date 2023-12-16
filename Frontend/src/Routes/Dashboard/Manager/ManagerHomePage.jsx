import { Box, Button } from "@mui/material";

import styles from "./ManagerHomePage.module.css"

import { useContext, useEffect, useState } from "react";


import NavBar from "../../../Components/NavBar/NavBar";
import ManagerCard from "../../../Components/ManagerCard/ManagerCard";
import EditOrAddProductPopup from "../../../Components/Popups/EditOrAddProductPopup/EditOrAddProductPopup";
import { AppContext } from "../../../Context/AppContext";
const ManagerHomePage = ()=>{
  const [openAddProdPopup,setOpenAddProdPopup] = useState(false);
  const {getProductdata,productdata} = useContext(AppContext)
  const handleOpenAddProd = ()=>{
   setOpenAddProdPopup(true);
  }


  const handleCloseAddProdPopup=()=>{
   setOpenAddProdPopup(false)
  }


  useEffect(()=>{
   getProductdata()
  },[])
   return (
       <Box className={styles.mainContainer} >
           <NavBar/>
           <h1 style={{textAlign:'center'}} >Manager</h1>
           <Box className={styles.addProductButtonContainer}>
               <Button variant="contained" onClick={handleOpenAddProd} > Add Product </Button>
           </Box>
           <EditOrAddProductPopup open={openAddProdPopup} handleClose={handleCloseAddProdPopup} />
           <Box className={styles.cardsContainer} >
               {productdata.map((el,i)=>{
                   return <ManagerCard element={el} key={i} />
               })}
           </Box>
          
       </Box>
   )
}


export default ManagerHomePage;

