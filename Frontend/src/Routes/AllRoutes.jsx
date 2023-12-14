import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import CartPage from './CartPage/CartPage'

const AllRoutes = () => {
  return (
    <Routes>
<Route path={"/"} element={<HomePage/>}/>
<Route path={"/login"} element={<Login/>}/>
<Route path={"signup"} element={<Signup/>}/>
<Route path={"/cart"} element={<CartPage/>}/>

    </Routes>
  )
}

export default AllRoutes