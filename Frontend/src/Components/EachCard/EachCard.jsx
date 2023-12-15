import { Box, CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import styles from "./EachCard.module.css";
import { AppContext } from "../../Context/AppContext";
const EachCard = ({ el, placeofcall }) => {
  const { handleAddToCart, handleqty, handleDeleteData,addToCartBtnLoading } =
    useContext(AppContext);
  return (
    <Box className={styles.container}>
      <Box className={styles.imagebox}>
        <img
          className={styles.imageboxImg}
          src="https://rukminim2.flixcart.com/image/416/416/l4ln8nk0/pedicure-kit/w/p/c/63-manicure-pedicure-aloe-vera-6-step-single-use-kit-6-sachets-original-imagfgh9uwfmhdte.jpeg?q=70"
          alt=""
        />
      </Box>
      <Box className={styles.descBox}>
        RAAGA PROFESSIONAL Manicure & Pedicure | Aloe Vera | 6 Step Single Use
        Kit | 6 Sachets, 63 g (63 g, Set of 1)
      </Box>

      <Box className={styles.descrBox}>Weight:</Box>
      <Box className={styles.descrBox}>RS:</Box>
      <Box className={styles.qtyBox}>
        <Box
          onClick={async () => {
            let response = await handleqty(el._id, 1);
          }}
        >
          +
        </Box>
        <Box>Qty</Box>
        {/* <Box disabled={el.qty === 1} */}
        <Box
          onClick={async () => {
            let response = await handleqty(el._id, -1);
          }}
        >
          -
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
          // if (response.status == true) {
          //   alert(response.msg);
          //   handleGetAllCartData();
          // } else {
          //   alert(response.msg);
          // }
        }}
      >
        DELETE
      </Box>
    </Box>
  );
};

export default EachCard;
