const { OrderModel } = require("../Models/Order.model");
const { UserModel } = require("../Models/User.model");


const orderPlaceByCustomer = async (req, res) => {
 try {
   let payload = req.body;
   let updatedPayload = payload.orders.map((el, i) => {
     return { ...el, userId: payload.userId, status: "order placed" };
   });
   let result = await OrderModel.insertMany(updatedPayload);
   console.log("result is ", result);
   res.status(200).json({ msg: "order placed" });
 } catch (err) {
   res.send(500).json({ msg: "SOMETHING WENT WRONG WHILE PLACING ORDER" });
 }
};


const trackOrderWithStatus = async (req, res) => {
 try {
   let params = req.params;
   let userId = req.body.userId;
   let details = await OrderModel.find({ _id: params.orderId, userId });
   res.status(200).json({ details: details });
 } catch (err) {
   res.status(500).json({ msg: "FAILED TO GET ORDER STATUS" });
 }
};


const getMyOrders = async (req, res) => {
 try {
   let userId = req.body.userId;
   let orders = await OrderModel.find({ userId });
   res.status(200).json({ orders });
 } catch (err) {
   res.status(500).json({ msg: "FAILED TO GET MY ORDERS" });
 }
};


const updateStatusOfProduct = async (req, res) => {
 try {
   let payload = req.body;
   let user = await UserModel.findOne({ _id: payload.userId });
   if (user.usertype == "customer") {
     res
       .status(400)
       .json({ msg: "YOU ARE NOT AUTHORISED TO DO THIS OPERATION" });
   } else {
     let result = await OrderModel.updateOne(
       { _id: payload.orderId, userId: payload.customerUserId },
       { status: payload.newStatus }
     );
     res.status(200).json({msg:'Status updated successfully'})
   }
 } catch (err) {
   res.status(500).json({ msg: "FAILED TO UPDATE THE STATUS OF PRODUCT" });
 }
};
const getAllOrdersByCustomers = async (req, res) => {
    try {
      let payload = req.body;
      let user = await UserModel.findOne({ _id: payload.userId });
      if (user.usertype == "customer") {
        res
          .status(400)
          .json({ msg: "YOU ARE NOT AUTHORISED TO DO THIS OPERATION" });
      } else {
        let orders = await OrderModel.find();
        res.status(200).json({ allOrders: orders });
      }
    } catch (err) {
      res.status(500).json({ msg: "FAILED TO GET ALL ORDERS" });
    }
   };
   

module.exports = {
 orderPlaceByCustomer,
 trackOrderWithStatus,
 getMyOrders,
 updateStatusOfProduct,
 getAllOrdersByCustomers
};



