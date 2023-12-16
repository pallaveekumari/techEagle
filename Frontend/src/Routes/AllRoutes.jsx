import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Routes/Dashboard/Customer/HomePage";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import CartPage from "./CartPage/CartPage";
import MyOrderPage from "./MyOrderPage/MyOrderPage";
import ManagerHomePage from "./Dashboard/Manager/ManagerHomePage";
import PrivateRouteForCustomerDashboard from "./PrivateRoutes/PrivateRouteForCustomerDashboard";
import PrivateRouteForManagerDashboard from "./PrivateRoutes/PrivateRouteForManagerDashboard";
import AllOrdersForManager from "./AllOrdersForManager/AllOrdersForManager";


const AllRoutes = () => {
 return (
   <Routes>
     <Route
       path={"/"}
       element={
         <PrivateRouteForCustomerDashboard>
           <HomePage />
         </PrivateRouteForCustomerDashboard>
       }
     />
     <Route path={"/login"} element={<Login />} />
     <Route path={"signup"} element={<Signup />} />
     <Route
       path={"/cart"}
       element={
         <PrivateRouteForCustomerDashboard>
           <CartPage />
         </PrivateRouteForCustomerDashboard>
       }
     />
     <Route
       path={"/orders"}
       element={
         <PrivateRouteForCustomerDashboard>
           <MyOrderPage />
         </PrivateRouteForCustomerDashboard>
       }
     />
     <Route
       path={"/manager"}
       element={
         <PrivateRouteForManagerDashboard>
           <ManagerHomePage />
         </PrivateRouteForManagerDashboard>
       }
     />
     <Route
       path={"/allOrders"}
       element={
         <PrivateRouteForManagerDashboard>
           <AllOrdersForManager />
         </PrivateRouteForManagerDashboard>
       }
     />
   </Routes>
 );
};


export default AllRoutes;



