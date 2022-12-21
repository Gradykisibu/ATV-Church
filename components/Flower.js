import React from 'react'
import { Box } from '@mui/material'
// import style from "../../styles/AboutFlower.modue.css";
import Image from 'next/image';

export default function Flower() {
  return (
    <Box>
    <Box className="container">
    <Box className="tree">
    <Image src="Flowers.png" alt="flower image" width={150} height={150}/>
     </Box>

    </Box>
  </Box>
  )
}
