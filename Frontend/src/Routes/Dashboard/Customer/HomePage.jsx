import { Box, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import EachCard from "../../../Components/EachCard/EachCard";
import ManagerCard from "../../../Components/ManagerCard/ManagerCard";
import styles from "../Customer/HomePage.module.css";
import { AppContext } from "../../../Context/AppContext";
import CircularProgress from '@mui/material/CircularProgress';
const HomePage = () => {
  const { getProductdata, homepageDataloading, productdata ,handleGetAllCartData} = useContext(AppContext);
  useEffect(() => {
    getProductdata()
    handleGetAllCartData()
  },[]);
  return (
    <Box>
      <NavBar />
      <Box className={styles.mainContainer}>
        <img
          className={styles.containerimg}
          src="https://www.shutterstock.com/image-photo/dark-drone-flight-over-city-600nw-1372546655.jpg"
          alt=""
        />
      </Box>
      {homepageDataloading ? <CircularProgress/>:
      <Box className={styles.cardsContainer}>
        {productdata.map((el) => {
          return <EachCard el={el}  placeofcall={"homepage"} />;
        })}
      </Box>}
    </Box>
  );
};

export default HomePage;
