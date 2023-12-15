const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
 name: { type: String },
 image: { type: String },
 description: { type: String },
 weight: { type: String },
 price: { type: Number },
 qty: { type: Number },
 userId: { type: String },
 status:{type:String}
});
const OrderModel = mongoose.model("order", orderSchema);
module.exports = {
 OrderModel,
};
