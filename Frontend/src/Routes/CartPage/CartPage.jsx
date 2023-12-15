import { Box, Button, CircularProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { AppContext } from "../../Context/AppContext";
import EachCard from "../../Components/EachCard/EachCard";
import { Navigate, useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate=useNavigate()
  const { handleGetAllCartData, cartdataLoading, cartdata } =
    useContext(AppContext);
  useEffect(() => {
    handleGetAllCartData();
  }, []);
  return (
    <Box>
      <NavBar />
      {cartdataLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          {cartdata.map((el) => {
            return <EachCard el={el} />;
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
