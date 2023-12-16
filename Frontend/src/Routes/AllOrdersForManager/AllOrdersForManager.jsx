
import { Box } from "@mui/material";
import styles from "./AllOrdersForManager.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import CardForOrder from "../../Components/CardForOrder/CardForOrder";
import styles from "../AllOrdersForManager/AllOrdersForManager.module.css"

const AllOrdersForManager = () => {
   const {getAllOrdersForManagers,allordersForManagers} = useContext(AppContext)
   useEffect(()=>{
       getAllOrdersForManagers()
   },[])
 return (
   <Box className={styles.mainContainer}>
     <NavBar />
     <Box className={styles.cardsContainer}>
{allordersForManagers.map((el,i)=>{
   return <CardForOrder  />
})}
     </Box>
   </Box>
 );
};


export default AllOrdersForManager;



