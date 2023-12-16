const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: { type: String },
  image: { type: String },
  description: { type: String },
  weight: { type: String },
  price: { type: String },
  qty: { type: String }
});
const productModel = mongoose.model("product", productSchema);
module.exports = {
  productModel,
};
