import { Box, Button, CircularProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { AppContext } from "../../Context/AppContext";
import EachCard from "../../Components/EachCard/EachCard";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const navigate=useNavigate()
  const { handleGetAllCartData, cartdataLoading, cartdata } =
    useContext(AppContext);
  useEffect(() => {
    handleGetAllCartData();
  }, []);
  return (
    <Box className={styles.mainContainer}>
      <NavBar />
      {cartdataLoading ? (
        <CircularProgress />
      ) : (
        <Box className={styles.cardsContainer}>
          {cartdata.map((el) => {
            return <EachCard el={el} placeofcall={"cartpage"} />;
          })}
        </Box>
      )}

{cartdata.length>0 && 
<Button variant="contained" onClick={()=>{
  navigate("/orders")
}}>
  Place Order
</Button>}
    </Box>
  );
};

export default CartPage;
