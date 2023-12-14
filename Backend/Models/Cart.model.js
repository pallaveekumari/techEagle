const mongoose=require("mongoose")
const cartSchema=mongoose.Schema({
        
   
    image:{type:String},
   
    description:{type:String},

    himage:{type:String},
    title:{type:String},

  weight:{type:String},
  price:{type:Number},
  qty:{type:Number},
  userId:{type:String}
  })

  const cartModel=mongoose.model("cartdata",cartSchema)

  module.exports={
    cartModel
  }