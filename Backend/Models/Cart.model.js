const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  name: { type: String },
  image: { type: String },
  description: { type: String },
  weight: { type: String },
  price: { type: Number },
  qty: { type: Number },
  userId: { type: String },
});
const cartModel = mongoose.model("cartdata", cartSchema);
module.exports = {
  cartModel,
};
