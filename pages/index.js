import React from "react";
import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/homepage/ContactUs";
import Footer from "../components/homepage/Footer";
import Banner from "../components/homepage/Banner";
import styles from "../styles/Home.module.css";
import Events from "../components/homepage/events";
import { Box } from "@mui/material";
import About from "../components/homepage/About";
import Navbar from "../components/homepage/Navbar";
import axios from "axios";
import { AppContext } from "../context/app-context";

const endpoint =
  "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-events";

export default function Home() {
  const { setEvents,switchState,EventsData } = React.useContext(AppContext);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get(endpoint);
      setEvents(response.data.eventsAndSermons);
      console.log('EVENTS',EventsData)
    }
    getData();
    switchState()
  },[]);

  return (
    <Box>
      <Navbar />
      <Banner />
      <Events />

      <About />

      {/* ContactUs */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </Box>
  );
}
