import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { AppContext } from "../context/app-context";
const displayText = "bauhaus-93";
const typeText = "baumans";
import Link from "next/link";
import {useRouter} from 'next/router';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from 'next/image';

export default function ContentPage() {
  const { Events } = React.useContext(AppContext);
  console.log({ Events });
 const router = useRouter() 
  return (
    <Box sx={style.container}>
      <Box sx={{display : 'flex',justifyContent:'flex-start'}}>
        <Box onClick = {()=>router.back()} sx={style.backButton}>
          <ArrowBackIcon sx={{ color: "black", fontSize: "30px" }} />
        </Box>
      </Box>
      <Grid container spacing={2}>
        {Events.map((event,i) => (
          <Grid item xs={4} key={i}>
            <Box sx={style.gridItem}>
              <Link href={event.youtubeLink} target="_blank">
                <Box sx={style.thumbnail}>
                  <img
                    src={event.thumbnail}
                    // loader = {()=>event.thumbnail}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "15px",
                    }}
                    // layout = 'fill'

                    alt="content"
                  />
                </Box>
              </Link>
              <Box sx={style.sermonInfo}>
                <Link
                  href={event.youtubeLink}
                  style={{ textDecoration: "none", cursor: "default" }}
                  target="_blank"
                >
                  <Typography
                    sx={{ ...style.sermonInfoMainText, cursor: "pointer" }}
                  >
                    {event.Title.replace(/-/g, " ")}
                  </Typography>
                </Link>

                <Typography sx={style.dateInfo}>
                  11/7/2022 {event.startTime}-{event.endTime}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
const style = {
  container: {
    // display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 110px",
  },
  header: {
    width: "100%",
    padding: "20px 0px",
    // border : '1px solid'
  },
  headerText: {
    fontFamily: displayText,
    fontSize: "42px",
    color: "#444",
  },
  gridItem: {
    margin: "30px 0px",
    transition: "0.5s",
    "&:hover": {
      background: "#FF00FF22",
      transition: "0.5s",
      borderRadius: "20px",
    },
  },
  thumbnail: {
    background: "#eee",
    height: "280px",
    borderRadius: "15px",
  },
  sermonInfoMainText: {
    textDecoration: "none",
    fontSize: "30px",
    fontFamily: typeText,
    // paddingRight: "12px",
    marginTop: "12px",
    color: "#444",
    // background : 'gray',
    height: "100px",
    display: "flex",
    alignItems: "center",
  },
  dateInfo: {
    color: "#bbb",
    fontSize: "24px",
    fontFamily: typeText,
    marginTop: "30px",
  },
  backButton : {
	background: "hsl(240deg 10% 91%)",
	borderBottomRightRadius: "13px",
	borderTopRightRadius: "13px",
	width: "70px",
	height: "70px",
	marginTop: "30px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	opacity: "0.9",
	marginRight : 'auto',
	cursor : 'pointer'
  }
};
