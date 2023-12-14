import { Box, Button } from '@mui/material'
import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import EachCard from '../../Components/EachCard/EachCard'
import ManagerCard from '../../Components/ManagerCard/ManagerCard'

const HomePage = () => {
  return (
    <Box>
        <NavBar/>
        <Button>Homepage</Button>
        {/* <EachCard/> */}
        <ManagerCard/>
    </Box>
  )
}

export default HomePage