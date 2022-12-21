import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Link from "next/link";
import style from "../../styles/Banner.module.css";
import BannerVideo from "./BannerVideo";
import Image from 'next/image';

export default function Banner() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={style.BannerBackground}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className={style.birdCloudBakcground}
            >

              <Box className={style.BirdGif}>
                <label for="" className={style.bird}></label>
                <label for="" className={style.bird2}></label>
                <label for="" className={style.bird3}></label>
                <label for="" className={style.bird4}></label>
                <label for="" className={style.bird5}></label>
                <label for="" className={style.bird6}></label>
                <label for="" className={style.bird7}></label>
                <label for="" className={style.bird8}></label>
                <label for="" className={style.bird9}></label>
              </Box>

              <Box
                sx={{
                  width: "100px",
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "Center",
                  position: "absolute",
                  marginLeft: "350px",
                  marginTop: "180px",
                  opacity: "0.7",
                }}
              >
                <Image src="/Cloud1.png" alt="small cloud" width={110} height={110} />
              </Box>

              <Box className={style.cloud4Background}></Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "250px",
                  marginRight: "25px",
                }}
              >
                <Box
                  className={style.fontContainer}
                  sx={{ display: { xs: "none", sm: "block", md: "bloack" } }}
                >
                  <Typography
                    className="displayText"
                    sx={Text}
                    data-text="A CITY"
                  >
                    A City
                  </Typography>
                  <Typography className="displayText" sx={Text2}>
                    on a hill
                  </Typography>
                  <Typography style={Text3}>
                    A Church of the Lord of Jesus Christ, The Salt
                    <span>of the Earth. We build the Community</span>
                  </Typography>

                  <Link href="/MoreInfo">
                    <Typography sx={info}>For More Info</Typography>
                  </Link>
                </Box>

                <Box className={style.Sermon}>
                  <BannerVideo />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const Text = {
  fontSize: "200px",
  color: "white",
  height: "200px",
  width: "700px",
  letterSpacing: "-7.5px",
};

const Text2 = {
  // marginTop:"70px",
  fontSize: "40px",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "content",
  justifyContent: "space-between",
  width: "500px",
  paddingLeft: "10px",
  letterSpacing: "31.7px",
  marginTop: "10px",
};

const Text3 = {
  display: "Flex",
  paddingLeft: "10px",
  flexDirection: "column",
  fontSize: "17px",
  color: "hsl(257deg 18% 32%)",
  lineHeight:"19px"
};

const info = {
  width: "150px",
  height: "30px",
  fontSize: "16px",
  fontWeight: "bold",
  color: "white",
  background: "hsl(257deg 18% 32%)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px",
  marginTop: "35px",
  borderRadius: "2px",
  textDecoration:"none",
};
