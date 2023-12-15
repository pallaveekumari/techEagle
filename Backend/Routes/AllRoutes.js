const {Router} = require("express");
const { Signup, Login } = require("../Controllers/User.Controller");
const { getAllProducts, addProductByManager, deleteTheProduct, updateProduct } = require("../Controllers/Product.Controller");
const { authorisation } = require("../Middlewares/Authorization");
const { getCartData, addCartData, handleRemoveCartData, handleUpdateQuantity } = require("../Controllers/Cart.Controller");
const { orderPlaceByCustomer, trackOrderWithStatus, getMyOrders, updateStatusOfProduct } = require("../Controllers/Order.Controller");
const AllRoutes = Router()

AllRoutes.post("/signup", Signup);
AllRoutes.post("/login", Login);
AllRoutes.get("/allproducts",getAllProducts)
AllRoutes.get("/getcartdata",authorisation,getCartData)
AllRoutes.post("/addtocart",authorisation,addCartData)
AllRoutes.get("/removecartdata/:id",authorisation,handleRemoveCartData)
AllRoutes.post("/updateQty",authorisation,handleUpdateQuantity)
AllRoutes.post("/placeOrder", authorisation, orderPlaceByCustomer);
AllRoutes.get("/trackStatus/:orderId", authorisation, trackOrderWithStatus);
AllRoutes.get("/myOrders", authorisation, getMyOrders);
AllRoutes.post("/addProduct", authorisation, addProductByManager);
AllRoutes.delete("deleteProduct",authorisation,deleteTheProduct)
AllRoutes.post("/updateStatus", authorisation, updateStatusOfProduct);
AllRoutes.patch("/updateProduct/:prodId",authorisation,updateProduct)


module.exports={
    AllRoutes
}