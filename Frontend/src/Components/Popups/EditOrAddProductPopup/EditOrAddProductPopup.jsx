import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Button } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";


const init = {
 name:"",
 image: "",
 description: "",
 weight: "",
 price: "",
 qty: "",
};


const EditOrAddProductPopup = ({ open, handleClose }) => {
 const [formData, setFormData] = useState(init);
 const navigate = useNavigate();
 const { handleAddProduct,getProductdata } = useContext(AppContext);


 const handleChange = (e) => {
   const { name, value } = e.target;


   setFormData({ ...formData, [name]: value });
 };


 const handleSubmitForm = async () => {
   const token = Cookies.get("token");
   if (!token) {
     navigate("/login");
   } else {
     if (
       formData.image != "" &&
       formData.weight != "" &&
       formData.description != "" &&
       formData.price != "" &&
       formData.qty != ""
     ) {
       let res =await handleAddProduct(formData, token);
       if (res == 200) {
         alert("Item Added Successfully");
        await getProductdata();
        handleClose();
       } else {
         alert("Failed to add the product");
       }
     }else{
       alert('All fields are mandatory')
     }
   }
 };
 return (
   <Dialog open={open} onClose={handleClose}>
     <DialogTitle>ADD PRODUCT</DialogTitle>
     <DialogContent>
     <TextField
         autoFocus
         margin="dense"
         id="name"
         label="Name"
         type="text"
         fullWidth
         variant="outlined"
         name="name"
         onChange={(e) => handleChange(e)}
       />
       <TextField
         autoFocus
         margin="dense"
         id="name"
         label="Image"
         type="text"
         fullWidth
         variant="outlined"
         name="image"
         onChange={(e) => handleChange(e)}
       />
       <TextField
         autoFocus
         margin="dense"
         id="name"
         label="Description"
         type="text"
         fullWidth
         variant="outlined"
         name="description"
         onChange={(e) => handleChange(e)}
       />
       <TextField
         autoFocus
         margin="dense"
         id="name"
         label="Quantity"
         type="text"
         fullWidth
         variant="outlined"
         name="qty"
         onChange={(e) => handleChange(e)}
       />
       <TextField
         autoFocus
         margin="dense"
         id="name"
         label="Weight"
         type="text"
         fullWidth
         variant="outlined"
         name="weight"
         onChange={(e) => handleChange(e)}
       />
       <TextField
         autoFocus
         margin="dense"
         id="name"
         label="Price"
         type="number"
         fullWidth
         variant="outlined"
         name="price"
         onChange={(e) => handleChange(e)}
       />
     </DialogContent>
     <DialogActions>
       <Button onClick={handleSubmitForm} variant="contained">
         Submit
       </Button>
     </DialogActions>
   </Dialog>
 );
};


export default EditOrAddProductPopup;



