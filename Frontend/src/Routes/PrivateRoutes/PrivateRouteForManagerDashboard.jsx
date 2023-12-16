import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";


const PrivateRouteForManagerDashboard = ({children}) => {
   let token = Cookies.get("token");
   let user = JSON.parse(localStorage.getItem("user"));
   if (!token) {
     return <Navigate to={"/login"} />;
   } else {
     if (user?.usertype == "manager") {
       return children;
     } else {
       return <Navigate to={"/login"} />;
     }
   }
}


export default PrivateRouteForManagerDashboard

