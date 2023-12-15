import { Box, Button } from '@mui/material'
import React from 'react'
import NavBar from '../../../Components/NavBar/NavBar'
import EachCard from '../../../Components/EachCard/EachCard'
import ManagerCard from '../../../Components/ManagerCard/ManagerCard'
import styles from "../Customer/HomePage.module.css"
const HomePage = () => {
  return (
    <Box>
        <NavBar/>
       <Box className={styles.container}>
<img className={styles.containerimg} src="https://www.shutterstock.com/image-photo/dark-drone-flight-over-city-600nw-1372546655.jpg" alt="" />
       </Box>
    </Box>
  )
}

export default HomePage