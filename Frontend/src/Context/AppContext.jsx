import React, { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [homepageDataloading, sethomepageDataloading] = useState(false);
  const [loginBtnLoading, setloginBtnLoading] = useState(false);
  const [signupBtnLoading, setsignupBtnLoading] = useState(false);
  const [cartdataLoading, setcartdataLoading] = useState(false);
  const [addToCartBtnLoading, setaddToCartBtnLoading] = useState(false);
  const [productdata, setproductdata] = useState([]);
  const [cartdata, setcartdata] = useState([]);
  const [deleteBtnLoading,setdeleteBtnLoading]=useState(false)
  const [MyOrdersLoading,setMyOrdersLoading]=useState(false)
  const [myorderdata,setmyorderdata]=useState([])
  // const [plusQtyBtnLoading,setplusQtyBtnLoading]=useState(false)
  // const [minusQtyBtnLoading,setminusQtyBtnLoading]=useState(false)
  const [OrdersPlacedLoading,setOrdersPlacedLoading]=useState(false)
  const [myorderplaceddata,setmyorderplaceddata]=useState([])
  const [TrackStatusLoading,setTrackStatusLoading]=useState(false)
  const [allordersForManagers,setAllOrdersForManagers] = useState([]);
  const [statusOfOrder,setStatusOfOrder] = useState({});

 
  const handleAddsign = async (signupdata) => {
    try {
      setsignupBtnLoading(true);
      let res = await axios.post(
        "https://techeagle-dptt.onrender.com/signup",
        signupdata
      );
      setsignupBtnLoading(false);
      return res.data;
    } catch (err) {
      console.log("error", err);
      setsignupBtnLoading(false);
      return err.response.data;
    }
  };

  const handlelogin = async (payload) => {
    try {
      setloginBtnLoading(true);
      let res = await axios.post(
        "http://localhost:8000/login",
        payload
      );
      setloginBtnLoading(false);
      return res.data;
    } catch (err) {
      console.log("error", err);
      setloginBtnLoading(false);
      return err.response.data;
    }
  };

  const handleAddToCart = async (payload) => {
    try {
      setaddToCartBtnLoading(true);
      const token = Cookies.get("token");
      if (token) {
        let data = await axios.post(
          "http://localhost:8000/addtocart",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("data",data);
        setaddToCartBtnLoading(false);
        handleGetAllCartData()
        console.log("Data",data)
        return data.data;
      } else {
        alert("You're Not Logged In Please login first!");
        navigate("/login");
      }
    } catch (err) {
      console.log("error", err);
      setaddToCartBtnLoading(false);
      return err.response.data;
    }
  };


  const handleGetAllCartData = async () => {
    try {
      setcartdataLoading(true)
      const token = Cookies.get("token");
      let data = await axios.get("https://techeagle-dptt.onrender.com/getcartdata", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //  console.log(data)
      setcartdata(data.data.cartData);
      setcartdataLoading(false)
    } catch (err) {
      console.log(err);
      setcartdataLoading(false);
    }
  }; 


  const handleqty = async (id, amount) => {
    const payload = {
      id: id,
      type: amount,
    };
    const token = Cookies.get("token");
    try {
      let res = await axios.post(
        "https://techeagle-dptt.onrender.com/updateQty",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log("res is ",res);

      return res.data;
    } catch (err) {
      console.log("error ", err);
      return err.response.data;
    }
  };

  const handleDeleteData = async (id) => {
    try {
      setdeleteBtnLoading(true)
      const token = Cookies.get("token");
      let data = await axios.get(
        `https://techeagle-dptt.onrender.com/removecartdata/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setdeleteBtnLoading(false)
      return data.data;
    } catch (err) {
      console.log("error", err);
      setdeleteBtnLoading(false)
      return err.response.data;
    }
  };

  const getProductdata = () => {
    sethomepageDataloading(true);
    axios.get(`https://techeagle-dptt.onrender.com/allproducts`).then((res) => {
      setproductdata(res.data.data);
      sethomepageDataloading(false);
    });
  };


  const getMyOrders=async()=>{
   try {
      setMyOrdersLoading(true)
      const token = Cookies.get("token");
      let data = await axios.get(
        `https://techeagle-dptt.onrender.com/myOrders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMyOrdersLoading(false)
      setmyorderdata(data.data.orders);
    } catch (err) {
      console.log("error", err);
      setMyOrdersLoading(false)
      return err.response.data;
    }
  }


  const getOrderPlaced=async()=>{
    try {
      setOrdersPlacedLoading(true)
      const token = Cookies.get("token");
      let data = await axios.post(
        `http://localhost:8000/placeOrder`,cartdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      for(let el of cartdata){
        handleDeleteData(el._id)
      }
      setOrdersPlacedLoading(false)
      setmyorderplaceddata(data.data);
      return data.status;
    } catch (err) {
      console.log("error", err);
      setOrdersPlacedLoading(false)
      return err.response.status;
    }
  }




const handleAddProduct = async (payload) => {
  try {
    const token = Cookies.get("token");
    let data = await axios.post(`http://localhost:8000/addProduct`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data.status;
  } catch (err) {
    console.log("FAILED TO ADD THE PRODUCT ", err);
    return err.response.status;
  }
};


const handleDeleteProductByManager = async (productId) => {
  try {
    const token = Cookies.get("token");
    let data = await axios.delete(
      `http://localhost:8000/deleteProduct/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );


    console.log(data.status);
    return data.status;
  } catch (err) {
    console.log("FAILED TO DELETE THE PRODUCT ", err);
    return err.response.status;
  }
};





const handleUpdateQuantityByManager = async (prodId, newQty) => {
  try {
    const token = Cookies.get("token");
    let data = await axios.patch(
      `http://localhost:8000/updateProduct/${prodId}`,
      {
        newQty: newQty,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data.status);
    return data.status
  } catch (err) {
    console.log("FAILED TO UPDATE QTY ", err);
    return err.response.status;
  }
};


const getAllOrdersForManagers =async ()=>{
  try{
    const token = Cookies.get("token");
    let data = await axios.patch(
      `http://localhost:8000/getAllOrdersByCustomer`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setAllOrdersForManagers(data.data.allOrders)
    return data.status;
  }catch(err){
    console.log('FAILED TO GET ALL ORDERS');
    return err.response.status
  }
}


const getOrderStatus = async (prodId)=>{
  try{
    setTrackStatusLoading(true)
    const token = Cookies.get("token");
    let data = await axios.get(
      `http://localhost:8000/trackStatus/${prodId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setStatusOfOrder(data.data.details);
    setTrackStatusLoading(false)
    return data.status
  }catch(err){
    console.log('FAILED TO GET ORDER STATUS ',err);
    setTrackStatusLoading(false)
    return err.response.status
  }
}


const handleUpdateStatus = async (payload)=>{
  try{
    const token = Cookies.get("token");
    let data = await axios.patch(
      `http://localhost:8000/updateStatus`,payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // setStatusOfOrder(data.data.details);
    return data.status;
  }catch(err){
    console.log('FAILED TO UPDATE ORDER STATUS ',err);
    return err.response.status
  }
}




  return (
    <AppContext.Provider
      value={{
        handlelogin,
        productdata,
        homepageDataloading,
        handleAddsign,
        handleAddToCart,
        handleqty,
        handleDeleteData,
        getProductdata,
        cartdataLoading,
        addToCartBtnLoading,
        handleGetAllCartData,
        loginBtnLoading,
        signupBtnLoading,
        cartdata,
        deleteBtnLoading,
        MyOrdersLoading,
        getMyOrders,
        myorderdata,
        myorderplaceddata,
        getOrderPlaced,
        TrackStatusLoading,
        OrdersPlacedLoading,
        handleDeleteProductByManager,
        handleUpdateStatus,
        allordersForManagers,
        statusOfOrder,
        handleAddProduct,
        getOrderStatus,
        getAllOrdersForManagers,
        handleUpdateQuantityByManager
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
