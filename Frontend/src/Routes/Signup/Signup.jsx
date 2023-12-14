import React from 'react'
import styles from "../Signup/Signup.module.css"
import { Box, Button, TextField } from '@mui/material'
const Signup = () => {
  return (
    <Box className={styles.container}>
        <Box className={styles.firstcontainer}>
            Looks Like You're New here !
        </Box>
        <Box className={styles.secondcontainer}>
            <TextField placeholder="Enter Name" type="text" />
            <TextField placeholder="Enter Email/Phone Number" type="text" />
            <TextField placeholder="Enter Address" type="text" />
            <TextField placeholder="Enter Password" type="password" />
        <Button variant='contained'>Submit</Button>
        <Button variant='contained'>Login</Button>
        </Box>
        
    </Box>
  )
}

export default Signup