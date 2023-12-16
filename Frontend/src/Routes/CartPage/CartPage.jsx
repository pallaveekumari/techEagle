import { Box, Button, CircularProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { AppContext } from "../../Context/AppContext";
import EachCard from "../../Components/EachCard/EachCard";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const navigate=useNavigate()
  const { handleGetAllCartData, cartdataLoading, cartdata,getOrderPlaced } =
    useContext(AppContext);
  useEffect(() => {
    handleGetAllCartData();
  }, []);
  return (
    <Box className={styles.mainContainer}>
      <NavBar />
      <h1 style={{textAlign:'center'}} >Cart Page</h1>
      {cartdataLoading ? (
        <CircularProgress />
      ) : (
        <Box className={styles.cardsContainer}>
          {cartdata.map((el,i) => {
            return <EachCard el={el} placeofcall={"cartpage"} key={i} />;
          })}
        </Box>
      )}

{cartdata.length>0 && 
<Button variant="contained" onClick={async ()=>{
  let res=await getOrderPlaced()
  if(res==200){
    alert("Your Order has been placed successfully")
    navigate("/orders")
  }
  else{
    alert("Something went wrong while placing the order")
  }
}}>
  Place Order
</Button>}
    </Box>
  );
};

export default CartPage;
