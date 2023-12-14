const { productModel } = require("../Models/Product.model")

const getAllProducts=async(req,res)=>{
    try{

        let data=await productModel.find()
        res.status(200).json({data})

    }
    catch(err){
        console.log('error',err)
    }
}

module.exports={
    getAllProducts
}