import { Box } from "@mui/material";
import React from "react";

export default function BannerVideo() {
  return (
    <Box style={{ opacity: "0.8", marginTop: "30px"}}>
      <iframe
        width="245"
        height="120"
        src="https://www.youtube.com/embed/pYASKtJOyow?autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Box>
  );
}
