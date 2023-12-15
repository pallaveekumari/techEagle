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
  const [productdata, setproductdata] = useState([]);

  const handleAddsign = async (signupdata) => {
    try {
      signupBtnLoading(true);
      let res = await axios.post(
        "https://techeagle-dptt.onrender.com/signup",
        signupdata
      );
      signupBtnLoading(false);
      return res.data;
    } catch (err) {
      console.log("error", err);
      signupBtnLoading(false);
      return err.response.data;
    }
  };

  const handlelogin = async (payload) => {
    try {
      loginBtnLoading(true);
      let res = await axios.post(
        "https://techeagle-dptt.onrender.com/login",
        payload
      );
      loginBtnLoading(false);
      return res.data;
    } catch (err) {
      console.log("error", err);
      loginBtnLoading(false);
      return err.response.data;
    }
  };

  const handleAddToCart = async (payload) => {
    try {
      cartdataLoading(true);
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
        cartdataLoading(false);
        return data.data;
      } else {
        alert("You're Not Logged In Please login first!");
        navigate("/login");
      }
    } catch (err) {
      console.log("error", err);
      cartdataLoading(false);
      return err.response.data;
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
      const token = Cookies.get("token");
      let data = await axios.get(
        `https://techeagle-dptt.onrender.com/removecartdata/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.data;
    } catch (err) {
      console.log("error", err);
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
        loginBtnLoading,
        signupBtnLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
