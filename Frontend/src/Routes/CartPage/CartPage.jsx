import { Box, CircularProgress } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { AppContext } from '../../Context/AppContext'
import EachCard from '../../Components/EachCard/EachCard'

const CartPage = () => {
  const {handleGetAllCartData,cartdataLoading,cartdata}=useContext(AppContext)
  useEffect(()=>{
    handleGetAllCartData()
  },[])
  return (
    <Box>
<NavBar/>
   {cartdataLoading?<CircularProgress/>: 
   <Box>
  { cartdata.map((el)=>{
    return (
      <EachCard el={el}/>
    )
   })}
    </Box>}
    </Box>
  )
}

export default CartPage