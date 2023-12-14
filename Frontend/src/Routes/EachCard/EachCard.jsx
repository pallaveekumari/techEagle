import { Box } from '@mui/material'
import React from 'react'
import styles from "../EachCard/EachCard.module.css"
const EachCard = () => {
  return (
    <Box className={styles.container}>
     <Box  className={styles.imagebox}>
        <img className={styles.imageboxImg} src="https://rukminim2.flixcart.com/image/416/416/l4ln8nk0/pedicure-kit/w/p/c/63-manicure-pedicure-aloe-vera-6-step-single-use-kit-6-sachets-original-imagfgh9uwfmhdte.jpeg?q=70" alt="" />
     </Box>
     <Box className={styles.descBox} >RAAGA PROFESSIONAL Manicure & Pedicure | Aloe Vera | 6 Step Single Use Kit | 6 Sachets, 63 g  (63 g, Set of 1)</Box>
     <Box className={styles.qtyBox}>
<Box>+</Box>
     <Box>Qty</Box>
<Box>-</Box>

     </Box>
     <Box>weight</Box>
     <Box>price</Box>
     <Box>addtocart</Box>
     <Box>Place Order</Box>
    </Box>
  )
}

export default EachCard