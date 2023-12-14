import React, { createContext, useState } from "react";
import axios from "axios"
export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
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
  return (
    <AppContext.Provider value={{ handlelogin, handleAddsign }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
