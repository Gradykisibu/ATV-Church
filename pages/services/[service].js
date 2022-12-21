import React from "react";
import { useRouter } from "next/router";
import { Box, Typography, Grid, Button } from "@mui/material";
import { AppContext } from "../../context/app-context";
const displayText = "bauhaus-93";
const typeText = "baumans";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Link from "next/link";
import Image from 'next/image';


function Service() {
  const router = useRouter();
  const { Events } = React.useContext(AppContext);
  const MainEvent = Events.filter(
    (item) => !item.isUpcoming && router.query.serviceName === item.type
  );
  const filteredEvents = Events.filter((item)=>router.query.serviceName === item.type)
  console.log("QUERY", router.query);
  console.log("MAIN", MainEvent[0]);
  const showAll = ()=>{
    router.push({href:'/content',pathname : '/content'})
  }
  return (
    <Box sx={style.container}>
        <Box sx={style.mainVideo}>
      <Link href={MainEvent[0]?.youtubeLink ? MainEvent[0].youtubeLink : '#' } target="_blank" style={{border : 'none',textDecoration:'none'}}>
          <img
            src={MainEvent[0]?.thumbnail}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "0% 0px 108.339px 108.339px",
            }}
            // loader = {()=>MainEvent[0]?.thumbnail}
            // layout = 'fill'
            alt="services"
            />
          <Box
            sx={{
              ...style.mainVideo,
              position: "absolute",
              fontSize: "300px",
              background: "black",
              opacity: "0.3",
              right: "50%",
              top: "50%",
              color: "#aaa",
              transform: "translate(50%,-50%)",
            }}
            ></Box>
            </Link>
          <PlayCircleOutlineIcon
            sx={{
              position: "absolute",
              zIndex: "100",
              fontSize: "300px",
              cursor: "pointer",
              right: "50%",
              top: "50%",
              color: "#aaa",
              transform: "translate(50%,-50%)",
              transition : '0.5s',
              '&:hover' : {
                color : '#fff',
                transition : '0.5s',
              }
            }}
          />
        </Box>
        
      <Box sx={style.header}>
        <Typography sx={style.headerText}>
          Popular Sermons ({router.query?.serviceName})
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {filteredEvents.map((event,i) => (
          <Grid item xs={4} key={i}>
            <Box sx={style.gridItem}>
              <Link href={event.youtubeLink} target="_blank">
                <Box sx={style.thumbnail}>
                  <img
                    src={event.thumbnail}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "15px",
                    }}
                    layout = 'fill'
                    alt="services"
                    // loader = {()=>event.thumbnail}
                    
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

                <Typography sx={style.dateInfo}>11/7/2022 4:23 PM</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        style={{
          margin: "30px 0px",
          background: "#ddd",
          width: "100%",
          height: "4px",
        }}
      />
      <Box sx={style.header}>
        <Typography sx={style.headerText}>
          Sermons ({router.query?.serviceName})
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {Events.slice(0, 3).map((event,i) => (
          <Grid item xs={4} key={i}>
            <Box sx={style.gridItem}>
              <Box sx={style.thumbnail}>
                <img
                  src={event.thumbnail}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "15px",
                  }}
                  // loader = {()=>event.thumbnail}
                  // layout = 'fill'
                  alt="services"
                />
              </Box>
              <Box sx={style.sermonInfo}>
                <Typography sx={style.sermonInfoMainText}>
                  {event.Title.replace(/-/g, " ")}
                </Typography>
                <Typography sx={style.dateInfo}>
                  11/7/2022 {event.startTime} PM
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ margin: "40px 0px", width: "100%" }}>
        <Button
          onClick = {showAll}
          sx={{
            background: "rgba(83, 87, 118, 235)",
            color: "white",
            "&:hover": {
              background: "rgba(83, 87, 118, 235)",
              color: "white",
            },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: typeText,
              fontSize: "24px",
              padding: "0px 8px",
            }}
          >
            SHOW ALL
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 110px",
  },
  mainVideo: {
    height: "750px",
    // marginTop: "80px",
    width: "100%",
    background: "violet",
    borderRadius: "0% 0px 108.339px 108.339px",
    marginBottom: "40px",
    position: "relative",
    border : 'none'
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
};
export default Service;
