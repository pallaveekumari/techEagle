const {Router} = require("express");
const { Signup, Login } = require("../Controllers/User.Controller");
const { getAllProducts } = require("../Controllers/Product.Controller");
const { authorisation } = require("../Middlewares/Authorization");
const { getCartData, addCartData, handleRemoveCartData, handleUpdateQuantity } = require("../Controllers/Cart.Controller");
const AllRoutes = Router()

AllRoutes.post("/signup", Signup);
AllRoutes.post("/login", Login);
AllRoutes.get("/allproducts",getAllProducts)
AllRoutes.get("/getcartdata",authorisation,getCartData)
AllRoutes.post("/addtocart",authorisation,addCartData)
AllRoutes.get("/removecartdata/:id",authorisation,handleRemoveCartData)
AllRoutes.post("/updateQty",authorisation,handleUpdateQuantity)

module.exports={
    AllRoutes
}