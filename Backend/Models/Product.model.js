const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
        
   
    image:{type:String},
   
    description:{type:String},

    himage:{type:String},
    title:{type:String},

  weight:{type:String},
  price:{type:Number},

  })

  const productModel=mongoose.model("product",productSchema)

  module.exports={
    productModel
  }