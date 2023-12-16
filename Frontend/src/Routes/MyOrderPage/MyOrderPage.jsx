import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext'
import { Box, Button, CircularProgress } from '@mui/material'
import NavBar from '../../Components/NavBar/NavBar'
import EachCard from '../../Components/EachCard/EachCard'
import styles from "./MyOrderPage.module.css"
const MyOrderPage = () => {
    const {myorderdata,MyOrdersLoading,getMyOrders,}=useContext(AppContext)
    useEffect(()=>{
        getMyOrders()
    },[])
  return (
    <Box className={styles.mainContainer}>
        <NavBar/>
        {MyOrdersLoading?<CircularProgress/>:
        <Box className={styles.cardsContainer}>
            {
               myorderdata.map((el)=>{
                return (
                    <EachCard el={el} placeofcall={"orderpage"} />
                )
               }) 
            }
        </Box>}
        
    </Box>
  )
}

export default MyOrderPage