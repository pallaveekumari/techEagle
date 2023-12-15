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
  const [plusQtyBtnLoading,setplusQtyBtnLoading]=useState(false)
  const [minusQtyBtnLoading,setminusQtyBtnLoading]=useState(false)
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
        "https://techeagle-dptt.onrender.com/login",
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
          "https://techeagle-dptt.onrender.com/addtocart",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("data",data);
        setaddToCartBtnLoading(false);
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
        myorderdata
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
