import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image'


function About() {
  return (
    <Box className="aboutus" sx={{ paddingLeft: "90px", }}>
      <Box sx={hello}>
        <Box sx={{width:"100%", display:"flex", justifyContent:"space-between", marginBottom:"190px", marginLeft:"10px"}}>
        <Box sx={{marginTop:"100px", height:"150px", marginLeft:"40px"}}><Image src="/Tree 1.png" alt="flower image" width={25} height={200}/></Box>
        <Image src="/Flower.png" alt="flower image" width={150} height={150} className="tree2"/>
        </Box>

        <Box sx={{position:"absolute"}}>
        <Box
          className="typeText"
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            alignItems: "center",
          }}
        >
          <h4>
            <span style={{ color: "#FF1493" }}>A</span>bout Us
          </h4>
        </Box>

        <Box sx={{ display: "flex",justifyContent:"center",padding: "30px 0" }}>
          <Box sx={{ padding: "0 80px", width:"40%" ,  fontWeight: "900"}}>
            <Typography sx={{ margin: "60px 0 0 0", textAlign: "left", fontWeight:"bold" }}>
              <span
                style={{
                  color: "hsl(47deg 65% 72%)",
                  fontWeight: "bolder",
                  paddingRight: "6px",
                 
                }}
              >
                Lorem ipsum
              </span>
              dolor sit amet, consectetur adipisicing elit. Qui dicta minus
              molestiae vel beatae natus eveniet ratione temporibus aperiam
              harum alias officiis assumenda officia quibusdam deleniti eos
              cupiditate dolore doloribus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Qui dicta minus
            </Typography>
            <Typography sx={{ margin: "60px 0 0 0", textAlign: "left" , fontWeight:"bold", }}>
              <span
                style={{
                  color: "hsl(47deg 65% 72%)",
                  fontWeight: "bolder",
                  paddingRight: "6px",
                }}
              >
               Montes,
              </span>
              sed nulla eum vero expedita ex delectus voluptates rem at neque
              quos facere sequi unde optio aliquam!
            </Typography>
            <Typography
              sx={{ margin: "50px 0 0 65%", justifyContent: "flex-end", fontWeight:"bold" ,transition:'800ms' ,"&:hover":{ scale:"1.1" }}}
            >
              <Link className="link" style={{ color: "wheat" }} href="/MoreInfo">
                More Info
                <ArrowForwardIcon/>
              </Link>
            </Typography>
          </Box>

          <Box sx={{ padding: "0 80px", width:"40%"  }}>
            <Typography sx={{ margin: "60px 0 0 0", textAlign: "left", fontWeight:"bold", }}>
              <span
                style={{
                  color: "hsl(47deg 65% 72%)",
                  fontWeight: "bolder",
                  paddingRight: "6px",
                }}
              >
                Umsan
              </span>
              dolor sit amet, consectetur adipisicing elit. Qui dicta minus
              molestiae vel beatae natus eveniet ratione temporibus aperiam
              harum alias officiis assumenda officia quibusdam deleniti eos
              cupiditate dolore doloribus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Qui dicta minus
            </Typography>
            <Typography sx={{ margin: "60px 0 0 0", textAlign: "left", fontWeight:"bold" }}>
              <span
                style={{
                  color: "hsl(47deg 65% 72%)",
                  fontWeight: "bolder",
                  paddingRight: "6px",
                }}
              >
                Lillus Vumi
              </span>
              sed nulla eum vero expedita ex delectus voluptates rem at neque
              quos facere sequi unde optio aliquam!
            </Typography>
          </Box>
        </Box>
        </Box>
        
        <Box sx={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", paddingLeft:"110px"}}>
          <Image src="/Flowers.png" alt="flower image" width={150} height={150} style={{marginTop:"14%",}} className="tree"/>
          <Image src="/Tree 2.png" alt="flower image" width={25} height={200}  style={{marginRight:"14%",}}/>
        </Box>
      </Box>
    </Box>
  );
}

export default About;

const hello = {
  background: "rgb(68,68,94)",
  color: "white",
  height: "735px",
  width: "95%",
  opacity: "0.9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderTop: "7px solid hsl(47deg 66% 72%)",
  borderBottomLeftRadius: "50px",
  position:"relative"
};
