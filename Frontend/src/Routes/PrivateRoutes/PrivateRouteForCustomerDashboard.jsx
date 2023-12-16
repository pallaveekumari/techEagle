import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const PrivateRouteForCustomerDashboard = ({ children }) => {
 let token = Cookies.get("token");
 let user = JSON.parse(localStorage.getItem("user"));
 if (!token) {
   return <Navigate to={"/login"} />;
 } else {
   if (user?.usertype == "customer") {
     return children;
   } else {
     return <Navigate to={"/login"} />;
   }
 }
};


export default PrivateRouteForCustomerDashboard;



