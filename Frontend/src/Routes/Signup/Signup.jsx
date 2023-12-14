import React from 'react'
import styles from "../Signup/Signup.module.css"
import { Box, Button, TextField } from '@mui/material'
const Signup = () => {
  return (
    <Box className={styles.container}>
        <h2 className={styles.firstcontainer}>
            Looks Like You're New here !
        </h2>
        <h1 className={styles.heading} >Signup</h1>
        <Box className={styles.childContainer}>
            <TextField placeholder="Enter Name" type="text" />
            <TextField placeholder="Enter Email/Phone Number" type="text" />
            <TextField placeholder="Enter Address" type="text" />
            <TextField placeholder="Enter Password" type="password" />
            <Box className={styles.btn}>

        <Button variant='contained'>Submit</Button>
        <Button variant='contained'>Login</Button>
            </Box>
        </Box>
        
    </Box>
  )
}

export default Signup