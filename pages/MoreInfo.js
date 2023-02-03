import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Marquee from "react-fast-marquee";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import "aos/dist/aos.css"
import Aos from 'aos'

function MoreInfo() {

  useEffect(() => {
    Aos.init({duration: 4000});
  },[])
  return (
    <Box sx={container}>
      {/* Banner */}
      <Box className="MoreInfoBg" data-aos="zoom-in">
        <Link href="/">
          <Box sx={backButton}>
            <ArrowBackIcon sx={{ color: "black", fontSize: "30px" }} />
          </Box>
        </Link>

        <Box
          className="typeText"
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "50px",
            alignItems: "center",
            marginTop:"230px",
          }}
        >
          <h4>
            <span style={{ color: "#FF1493" }}>A</span>bout Us
          </h4>
        </Box>
      </Box>

      {/* our missions */}
      <Box>
        <Box
          className="typeText"
          sx={{
            color: "hsl(228deg 16% 31%)",
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <h5 style={{ fontWeight: "boldest" }}>
            <span style={{ color: "#FF1493" }}>O</span>ur Mission
          </h5>
        </Box>

        <Typography
        // data-aos="fade-up"
        // data-aos-duration="2000"
          sx={{
            color: "hsl(228deg 16% 31%)",
            width: "1000px",
            fontSize: "18px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Lillus Vumi laoreet tortor in turpis varius a.Hendreritut elementumil
          lilus vumi twipsac dignissim orci mauris neveltue porttitor.
          Lectusdiam risus, acufi duorhbhu ieg cjsj ohut porttitor. Lillus Vumi
          laoreet dignissim orci mauris nev. Vumi laoreet tortor in turpis
          varius a.Hendreritut elementumil lilus vumi twipsac dignissim orci
          mauris neveltue porttitor. Lectusdiam risus, acufi duorhbhu ieg cjsj
          ohut porttitor. Lillus Vumi laoreet dignissim orci mauris neveltue
        </Typography>
      </Box>

      {/* Meet our pastors */}
      <Box sx={Pastors}>
        <Box sx={pastorsBox}>
          <img src="/Pastors.png" alt="" width="700px" height="700px"/>
        </Box>

        <Box sx={pastorsBox}>
          <Box
            className="typeText"
            sx={{
              color: "#FF1493",
              display: "flex",
              justifyContent: "center",
              fontSize: "55px",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <h5 style={{ fontWeight: "boldest" }}>Meet our Pastors</h5>
          </Box>

          <Box sx={{ marginLeft: "50px" }}>
            <Typography
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-easing="ease-in-sine"
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "white",
                width: "375px",
                marginTop: "25px",
                fontSize: "16px",
              }}
            >
              <span

                style={{
                  color: "hsl(47deg 65% 72%)",
                  fontWeight: "bolder",
                  paddingRight: "6px",
                }}
              >
                Lorem ipsum
              </span>
              dolor sit amet, consectetur adipisicing elit. Phaszi sellus nec
              tincidunt aliquam acco usan tincidunt rutrum eu. Puolu Montes,
              tellus ullamcorper phasu ellus vumi laoreet tortor in turpis
              varius a.Hendreritut elementumil.
            </Typography>

            <Typography
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "white",
                width: "375px",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              <span
                style={{
                  color: "hsl(47deg 65% 72%)",
                  fontWeight: "bolder",
                  paddingRight: "6px",
                }}
              >
                Lorem ipsum
              </span>
              dolor sit amet, consectetur adipisicing elit. Phaszi sellus nec
              tincidunt aliquam acco usan tincidunt rutrum eu. Puolu Montes,
              tellus ullamcorper phasu ellus vumi laoreet tortor in turpis
              varius a.Hendreritut elementumil.
            </Typography>

            <Typography
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "white",
                width: "375px",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              <span
                style={{
                  color: "hsl(47deg 65% 72%)",
                  fontWeight: "bolder",
                  paddingRight: "6px",
                }}
              >
                Lorem ipsum
              </span>
              dolor sit amet, consectetur adipisicing elit. Phaszi sellus nec
              tincidunt aliquam acco usan tincidunt rutrum eu. Puolu Montes,
              tellus ullamcorper phasu ellus vumi laoreet tortor in turpis
              varius a.Hendreritut elementumil.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Our visions */}
      <Box>
        <Box
          className="typeText"
          sx={{
            color: "hsl(228deg 16% 31%)",
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <h5 style={{ fontWeight: "boldest" }}>
            <span style={{ color: "#FF1493" }}>O</span>ur Vision
          </h5>
        </Box>

        <Typography
          sx={{
            color: "hsl(228deg 16% 31%)",
            width: "1000px",
            fontSize: "18px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Lillus Vumi laoreet tortor in turpis varius a.Hendreritut elementumil
          lilus vumi twipsac dignissim orci mauris neveltue porttitor.
          Lectusdiam risus, acufi duorhbhu ieg cjsj ohut porttitor. Lillus Vumi
          laoreet dignissim orci mauris nev. Vumi laoreet tortor in turpis
          varius a.Hendreritut elementumil lilus vumi twipsac dignissim orci
          mauris neveltue porttitor. Lectusdiam risus, acufi duorhbhu ieg cjsj
          ohut porttitor. Lillus Vumi laoreet dignissim orci mauris neveltue
        </Typography>
      </Box>

      {/* Meet our team */}
      <Box sx={{ width: "100%" }}>
        <Box
          className="typeText"
          sx={{
            color: "hsl(228deg 16% 31%)",
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <h5 style={{ fontWeight: "boldest" }}>
            <span style={{ color: "#FF1493" }}>M</span>eet our Team
          </h5>
        </Box>

        <Marquee style={{ marginTop: "40px"}}>
          <Stack direction="row" spacing={15}>
            <Box sx={marquee} style={{marginLeft:"100px"}}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600"
                sx={{ width: 100, height: 100 }}
              />
              <h3>Grady</h3>
              <h3>Kisibu</h3>
              <p style={{ fontSize: "12px" }}>Director of active youth</p>
            </Box>

            <Box sx={marquee} >
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600"
                sx={{ width: 100, height: 100 }}
              />
              <h3>Grady</h3>
              <h3>Kisibu</h3>
              <p style={{ fontSize: "12px" }}>Director of active youth</p>
            </Box>

            <Box sx={marquee}>
              <Avatar
                alt="Remy Sharp"
                src="https://static.nike.com/a/images/w_1920,c_limit/6ca98205-3a29-4635-b884-4f2f33e26ffe/nike-s-best-golf-shoes-for-traction-stability-and-comfort.jpg"
                sx={{ width: 100, height: 100 }}
              />
              <h3>Grady</h3>
              <h3>Kisibu</h3>
              <p style={{ fontSize: "12px" }}>Director of active youth</p>
            </Box>

            <Box sx={marquee}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600"
                sx={{ width: 100, height: 100 }}
              />
              <h3>Grady</h3>
              <h3>Kisibu</h3>
              <p style={{ fontSize: "12px" }}>Director of active youth</p>
            </Box>


            <Box sx={marquee}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600"
                sx={{ width: 100, height: 100 }}
              />
              <h3>Grady</h3>
              <h3>Kisibu</h3>
              <p style={{ fontSize: "12px" }}>Director of active youth</p>
            </Box>

            <Box sx={marquee}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600"
                sx={{ width: 100, height: 100 }}
              />
              <h3>Grady</h3>
              <h3>Kisibu</h3>
              <p style={{ fontSize: "12px" }}>Director of active youth</p>
            </Box>
          </Stack>
        </Marquee>
      </Box>

      {/* footer */}
      <Box
        sx={{
          background: "hsl(228deg 16% 31%)",
          width: "100%",
          marginTop: "100px",
          height: "200px",
          display: "flex",
          alignItems:"center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          className="typeText"
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
          }}
        >
          <h5 style={{ fontWeight: "boldest" }}>
            <span style={{ color: "#FF1493" }}>J</span>oin Us
          </h5>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyContent: "space-evenly",
            width: "200px",
            marginTop:"20px"
          }}
        >
          <Link href="https://www.instagram.com/theactivechurch_/">
            <InstagramIcon sx={{ fontSize: "20px", color: "#FF1493" }} />
          </Link>
          <Link href="https://www.twitter.com/theactivechurch">
            <TwitterIcon sx={{ fontSize: "20px", color: "#FF1493" }} />
          </Link>
          <Link href="https://www.facebook.com/ActiveWorship">
            <FacebookRoundedIcon sx={{ fontSize: "20px", color: "#FF1493" }} />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyContent: "space-between",
            width: "900px",
            marginTop:"20px",
            fontFamily: "sans-serif",
            color:"white",
            fontSize:"16px"
          }}
        >
          <p>Lorem ipsum dolor sit amet</p>
          <p>consectetur adipisicing eli</p>
          <p>pursus sit amet luctus venenatis</p>
        </Box>

      </Box>
    </Box>
  );
}

export default MoreInfo;

const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const backButton = {
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
};
const Pastors = {
  width: "1050px",
  height: "800px",
  borderRadius: "90px",
  background: "hsl(228deg 16% 31%)",
  marginTop: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  justifyContent: "space-between",
};

const pastorsBox = {
  width: "45%",
  height: "600px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const marquee = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontFamily: "sans-serif",
  color: "hsl(228deg 16% 31%)",
};
