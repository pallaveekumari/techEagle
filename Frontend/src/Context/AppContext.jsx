import React, { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const handleAddsign = async (signupdata) => {
    try {
      let res = await axios.post("http://localhost:8000/signup", signupdata);

      return res.data;
    } catch (err) {
      console.log("error", err);
      return err.response.data;
    }
  };

  const handlelogin = async (payload) => {
    try {
      let res = await axios.post("http://localhost:8000/login", payload);
      return res.data;
    } catch (err) {
      console.log("error", err);
      return err.response.data;
    }
  };

  const handleAddToCart = async (payload) => {
    try {
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

        return data.data;
      } else {
        alert("You're Not Logged In Please login first!");
        navigate("/login");
      }
    } catch (err) {
      console.log("error", err);
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
      let res = await axios.post("http:/localhost:8000/updateQty", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
      let data = await axios.get(`http:/localhost:8000/removecartdata/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.data;
    } catch (err) {
      console.log("error", err);
      return err.response.data;
    }
  };
  return (
    <AppContext.Provider
      value={{ handlelogin, handleAddsign, handleAddToCart, handleqty ,handleDeleteData}}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
