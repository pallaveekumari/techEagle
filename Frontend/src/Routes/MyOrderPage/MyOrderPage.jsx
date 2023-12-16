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
        <h1 style={{textAlign:'center'}} >My Orders Page</h1>
        {MyOrdersLoading?<CircularProgress/>:
        <Box className={styles.cardsContainer}>
            {
               myorderdata.map((el,i)=>{
                return (
                    <EachCard el={el} placeofcall={"orderpage"} key={i} />
                )
               }) 
            }
        </Box>}
        
    </Box>
  )
}

export default MyOrderPage