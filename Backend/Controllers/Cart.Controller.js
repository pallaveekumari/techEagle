const { cartModel } = require("../Models/Cart.model");
const getCartData = async (req, res) => {
  try {
    const { userId } = await req.body;
    const cartData = await cartModel.find({ userId });
    res.status(200).json({ cartData });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

const addCartData = async (req, res) => {
  try {
    const payload = req.body;
    const exist = await cartModel.findOne({
      userId: payload.userId,
      title: payload.title,
    });

    console.log("Payload:", payload);
    console.log("Exist:", exist);

    if (!exist) {
      delete payload['_id'];
      // console.log("updated payload ",payload);
      const updatecartdata = new cartModel(payload);

      // Attempt to save the data
      try {
        await updatecartdata.save();
        console.log("Data saved successfully");
        res.status(200).json({ msg: "CartData added successfully", status: true });
      } catch (saveError) {
        console.error("Error saving data:", saveError);
        res.status(500).json({ msg: "Error saving data", error: saveError, status: false });
      }
    } else {
      res.status(400).json({ msg: "Item Already In The CartList", status: false });
    }
  } catch (err) {
    console.error("Something went wrong:", err);
    res.status(500).json({ msg: "Something went wrong", error: err, status: false });
  }
};
const handleRemoveCartData= async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    await cartModel.deleteOne({ _id: id, userId: userId });
    res.status(200).json({ msg: "Item reomoved from cart",status:true });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err,status:false });
  }
};
const handleUpdateQuantity=async(req,res)=>{
  try{
  const {id,type,userId}=req.body;
  let data = await cartModel.findOne({_id:id,userId:userId});
  console.log(data)
  let updatedData=await cartModel.updateOne({_id:id,userId:userId},{$set:{"qty":data.qty+type}});
  res.status(200).json({msg:"Updated Successfully",updatedData,status:true})
  }
  catch(err){
    res.status(400).json({ msg: "Something went wrong", error: err,status:false });
  }
}

module.exports = {
 getCartData ,
  addCartData,
  handleRemoveCartData,
  handleUpdateQuantity
};