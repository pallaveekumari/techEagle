import React, { useContext, useState } from "react";

import styles from "../Signup/Signup.module.css";
import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
const Signup = () => {
  const navigate = useNavigate();
  const initial = {
    name: "",
    email: "",
    address: "",
    password: "",
    usertype:""
  };

  const { handleAddsign,signupBtnLoading } = useContext(AppContext);

  const [signupData, setSignupData] = useState(initial);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };
  return (
    <Box>
      <NavBar />

      <Box className={styles.container}>
        <h2 className={styles.firstcontainer}>Looks Like You're New here !</h2>
        <h1 className={styles.heading}>Signup</h1>
        <Box className={styles.childContainer}>
          <TextField
          fullWidth
            placeholder="Enter Name"
            type="text"
            name="name"
            label="Name"
            onChange={handleChange}

          />
          <TextField
          fullWidth
            placeholder="Enter Email"
            type="text"
            name="email"
            label="Email"
            onChange={handleChange}
          />
          <TextField
          fullWidth
            placeholder="Enter Address"
            type="text"
            name="address"
            label="Address"
            onChange={handleChange}
          />
          <TextField
          fullWidth
            placeholder="Enter Password"
            type="password"
            name="password"
            label="Password"
            onChange={handleChange}
          />
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">UserType</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name="usertype"
    label="UserType"
    onChange={handleChange}
  >
    <MenuItem value={"customer"}>Customer</MenuItem>
    <MenuItem value={"manager"}>Manager</MenuItem>
    
  </Select>
</FormControl>
          <Box className={styles.btn}>
           {signupBtnLoading?<CircularProgress/>: <Button
              variant="contained"
              onClick={async () => {
                let res = await handleAddsign(signupData);
                if (res.status) {
                  alert(res.msg);
                  navigate("/login");
                } else {
                  alert(res.msg);
                }
              }}
            >
              Submit
            </Button>}

            <Button onClick={()=>{
              navigate("/login")
            }}variant="contained">Existing User : Login</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
