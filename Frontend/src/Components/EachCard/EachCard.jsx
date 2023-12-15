import { Box, CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import styles from "./EachCard.module.css";
import { AppContext } from "../../Context/AppContext";
const EachCard = ({ el, placeofcall }) => {
  const { handleAddToCart, handleqty, handleGetAllCartData,handleDeleteData,addToCartBtnLoading } =
    useContext(AppContext);
  return (
    <Box className={styles.container}>
      <Box className={styles.imagebox}>
        <img
          className={styles.imageboxImg}
          src={el.image}
          alt=""
        />
      </Box>
      <Box className={styles.descBox}>
       {el.description}
      </Box>

      <Box className={styles.descrBox}>Weight: {el.weight}</Box>
      <Box className={styles.descrBox}>RS: {el.price}</Box>
      <Box className={styles.qtyBox}>
      <Box
      disabled={el.qty==1}
          onClick={async () => {
            let response = await handleqty(el._id, -1);
            if (response.status) {
              
              handleGetAllCartData();
            }
          }}
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
     {addToCartBtnLoading?<CircularProgress/>: <Box
        className={styles.addtocartBox}
        onClick={() => {
          handleAddToCart(el);
          alert("Item added to your cart");
        }}
      >
        Add To Cart
      </Box>}
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
    </Box>
  );
};

export default EachCard;
