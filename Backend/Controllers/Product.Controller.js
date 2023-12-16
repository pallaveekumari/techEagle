const { productModel } = require("../Models/Product.model");
const { UserModel } = require("../Models/User.model");


const getAllProducts = async (req, res) => {
 try {
   let data = await productModel.find();
   res.status(200).json({ data });
 } catch (err) {
   console.log("error", err);
 }
};


const addProductByManager = async (req, res) => {
 try {
   let { name, image, description, weight, price, userId, qty } = req.body;
   let user = await UserModel.findOne({ _id: userId });
   if (user.usertype == "customer") {
     res
       .status(400)
       .json({ msg: "YOU ARE NOT AUTHORISED TO DO THIS OPERATION" });
   } else {
     let newProduct = await new productModel({
       name,
       image,
       description,
       weight,
       price,
       qty,
     });
     await newProduct.save();
     res.status(200).json({ msg: "Product added successfully" });
   }
 } catch (err) {
   res.status(500).json({ msg: "FAILED TO ADD THE PRODUCT" });
 }
};


const deleteTheProduct = async (req, res) => {


 try {
   let productId = req.params.productId;
   let userId = req.body.userId;
   console.log(userId)
   let user = await UserModel.findOne({ _id: userId });
   if (user.usertype == "customer") {
     res
       .status(400)
       .json({ msg: "YOU ARE NOT AUTHORISED TO DO THIS OPERATION" });
   } else {
     await productModel.deleteOne({ _id: productId });
     res.status(200).json({ msg: "Product deleted successfully" });
   }
 } catch (err) {
   res.status(500).json({ msg: "FAILED TO DELETE THE PRODUCT" });
 }
};


const updateProduct = async (req, res) => {
 try {
   // let productId = req.params.productId;
   let params = req.params;
   let payload = req.body;
   let userId = payload.userId;
   let user = await UserModel.findOne({ _id: userId });
   if (user.usertype == "customer") {
     res
       .status(400)
       .json({ msg: "YOU ARE NOT AUTHORISED TO DO THIS OPERATION" });
   } else {
     await productModel.updateOne(
       { _id: params.prodId },
       { qty: payload.newQty }
     );
     res.status(200).json({ msg: "Product quantity updated successfully" });
   }
 } catch (err) {
   res.status(500).json({ msg: "FAILED TO UPDATE THE PRODUCT" });
 }
};


module.exports = {
 getAllProducts,
 updateProduct,
 deleteTheProduct,
 addProductByManager,
};



