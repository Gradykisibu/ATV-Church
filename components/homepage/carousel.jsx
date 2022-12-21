import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { AppContext } from "../../context/app-context";
import { handleNav } from "../../utils/navigation";
const displayText = "bauhaus-93";
const typeText = "baumans";
import { useRouter } from "next/router";
import axios from "axios";
const endpoint =
  "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-events";
const Carousel = ({ currentState }) => {
  const {
    Events: data,
    cc,
    youth,
    sermon,
    mainEvents,
    setMainEvents,
    mainEventsData,
    carouselClass,
    setEvents,
  } = React.useContext(AppContext);

  // const events = data.filter((event, i) => !event.isUpcoming);

  let [num, setNum] = React.useState(0);
  const timeout = setTimeout(()=>{
    if (mainEvents.length >1 && mainEvents[0] !== undefined){
    console.log('DATAX',mainEvents)
      return
    } 
    console.log('DATA',mainEvents)

      setMainEvents([sermon,youth,cc])
    console.log('NUMBER',num)
  },2000)

    
  const events = [sermon, cc, youth, sermon, cc, youth];

  const router = useRouter();

  return (
    <Box
      className={
        carouselClass ? styles["event-wrapper"] : styles["event-wrapper-2"]
      }
    >
      {[...mainEvents, ...mainEvents].map((event, i) => (
        <Box
          key={i}
          // ref = {el => eventRef.current[event.type.replace(/ /g,'')] = el}
          className={styles.event}
          onClick={() => handleNav(router, event)}
          sx={{
            ...style.event,
            background: `url(${event?.thumbnail}) !important`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "cover !important",
            backgroundPositionX: "center !important",
          }}
        >
          <Box id={event?.type.replace(/ /g, "")} sx={style.eventText}>
            <Typography sx={style.eventType}>{event?.type}</Typography>
            <Box sx={{ display: "flex" }}>
              <Typography sx={style.eventTitle}>
                {event?.Title.replace(/-/g, " ")}
              </Typography>
              <Typography sx={style.eventTitle}>
                {event?.startTime} - {event?.endTime}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
const style = {
  container: {
    overflow: "hidden",
    position: "relative",
    // background : 'red',
    // zIndex : 100

    background: "#44475D",
  },
  header: {
    display: "flex",
    width: "100%",
    position: "relative",
    zIndex: 100,
    alignItems: "center",
  },
  icon: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "1s",
    width: `${100 / 8}%`,
  },
  main: {
    width: "100%",
    display: "flex",
    background: "url(/bg1.png)",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundSize: "1000px",
  },
  overlay1: {
    position: "absolute",
    top: "-20px",
    left: "-80px",
    width: "100%",
    height: "100vh",
    transform: "scale(0.9,0.9)",
  },
  overlay2: {
    position: "absolute",
  },
  box1: {},
  navbar: {
    display: "flex",
    width: "65%",
    alignItems: "center",
    background: "rgb(230, 210, 138)",
    height: "74px",
    boxShadow: "0px 10px 15px -10px #222",
  },
  box2: {
    width: "35%",
    height: "130vh",
    padding: "25px 0px",
  },
  box2header: {
    display: "flex",
    width: "35%",
    padding: "8px 0px",
    // background: "rgb(68, 71, 93)",
    background: "#FF00FF",
    color: "white",
    alignItems: "center",
    fontFamily: displayText,
    fontSize: "38px",
    height: "74px",
    paddingLeft: "65px",
    boxShadow: "0px 10px 15px -10px #222",
  },
  event: {},
  eventText: {
    transition: "1s",
    marginLeft: "80px",
    marginBottom: "40px",
    position: "relative",
    zIndex: "100",
  },
  eventType: {
    fontFamily: displayText,
    fontSize: "48px",
    color: "#eee",
    // textShadow: "1px 1px 10px #111",
  },
  eventTitle: {
    fontFamily: typeText,
    fontSize: "24px",
    color: "#eee",
    marginRight: "8px",
    textShadow: "1px 1px 10px #111",
  },
  upcomingEvent: {
    background: "purple",
    height: "40vh",
    width: "46vh",
    marginLeft: "65px",
    position: "relative",
    zIndex: 2,
    borderRadius: "15px",
    boxShadow: "14px 14px 15px 1px #111",
    marginBottom: "17px",
    cursor: "pointer",
  },
  divider: {
    height: "140vh",
    width: "20px",
    background: "rgba(103, 107, 138, 255)",
    position: "absolute",
    left: "63.5%",
    bottom: "0px",
  },
};

export default Carousel;
