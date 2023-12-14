import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import styles from "../Login/Login.module.css"
import NavBar from '../../Components/NavBar/NavBar'
const Login = () => {
  return (
    <Box >
     <NavBar/>
    <Box className={styles.container}>
  
    <h1 className={styles.heading} >Login</h1>
    <Box className={styles.childContainer}>
        
        <TextField placeholder="Enter Email/Phone Number" type="text" />
    
        <TextField placeholder="Enter Password" type="password" />
        

    <Button variant='contained'>Submit</Button>
   
        
    </Box>
    
</Box>
    </Box>
  )
}

export default Login