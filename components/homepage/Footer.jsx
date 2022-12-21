import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      width={"100%"}
      height={67}
      sx={{ background: "hsl(257deg 18% 32%)", color: "#fff", justifyContent:"space-evenly"}}
    >
      <Typography sx={{fontSize:"15px", fontWeight:"lighter"}}>Lorem ipsum dolor sit amit</Typography>
      <Typography sx={{fontSize:"15px", fontWeight:"lighter"}}>consectetur adsipiscng eli </Typography>
      <Typography sx={{fontSize:"15px", fontWeight:"lighter"}}>purus sit amet luctus venenatis</Typography>
    </Box>
  );
};

export default Footer;
