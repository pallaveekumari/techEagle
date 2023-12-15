import { Box, Button, CircularProgress, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import styles from "../Login/Login.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate()
  const initial={
    email:"",
    password: ""
  }
  const [loginData,setLoginData]=useState(initial)
const {handlelogin,loginBtnLoading}=useContext(AppContext)
const handleChange = (e) => {
  const { name, value } = e.target;

  setLoginData({
    ...loginData,
    [name]: value,
  });
};
  return (
    <Box className={styles.backBox}>
      <NavBar />
      <Box className={styles.container}>
        <h1 className={styles.heading}>Login</h1>
        <Box className={styles.childContainer}>
          <TextField placeholder="Enter Email" name="email" type="email" onChange={handleChange} />
          <TextField placeholder="Enter Password" name="password" type="password" onChange={handleChange}/>
          {loginBtnLoading?<CircularProgress/>:
          <Button variant="contained" onClick={async () => {
              let res = await handlelogin(loginData);
              if (res.status) {
                alert(res.msg);
                document.cookie = `token=${res.token}; max-age=86400; path=/;`;
                navigate("/");
              } else {
                alert(res.msg);
              }
            }}>Submit</Button>}
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
