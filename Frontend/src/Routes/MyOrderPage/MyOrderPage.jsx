import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext'
import { Box, Button, CircularProgress } from '@mui/material'
import NavBar from '../../Components/NavBar/NavBar'
import EachCard from '../../Components/EachCard/EachCard'

const MyOrderPage = () => {
    const {myorderdata,MyOrdersLoading,getMyOrders,}=useContext(AppContext)
    useEffect(()=>{
        getMyOrders()
    },[])
  return (
    <Box>
        <NavBar/>
        {MyOrdersLoading?<CircularProgress/>:
        <Box>
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