import { Box, Button, Typography, Input, Grid, TextField, useMediaQuery,Stack } from "@mui/material";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import style from "../../styles/Banner.module.css";
import Image from 'next/image'
const displayText = "bauhaus-93";


const ContactUs = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [submitted, setSubmitted] = useState(false);


  // const { register, handleSubmit, erros, reset } = useForm();
  //===============Modal=============
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //===============End================

  // const onSubmitForm = (e) => {
  //   e.preventDefault();
  //   console.log(values);
  //   let data = {
  //     name,
  //     email,
  //     message,
  //   };
    
  //   fetch("./api/contact.js", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((res) => {
  //     console.log("Response received");
  //     if (res.status === 200) {
  //       console.log("Response succeeded!");
  //       setSubmitted(true);
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //       res.send();
  //     }
  //   });
  // }

  // const minWidth600px = useMediaQuery("(min-width:600px)");
  // const { enqueueSnackbar } = useSnackbar();
  const [processing, setIsProcessing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleFieldChange = (e) => {
    const field = e.currentTarget.name;
    setForm({
      ...form,
      [field]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    console.log('hello')

    const formValues = Object.values(form);

    if (formValues.includes("")) {
      console.log("please fill in all fields", {
        variant: "warning",
      });
      setIsProcessing(false);
    } else {
      axios
        .post("/api/email", {
          cell: form.number,
          email: form.email,
          message: form.query,
          name: form.name,
        })
        .then((res) => {
          if (res.data.message == "MAIL_SENT") {
            console.log("Email successfully sent", {
              variant: "success",
            });

            setForm({
              name: "",
              email: "",
              query: "",
            });

            setIsProcessing(false);
          } else {
            console.log('msg')
            console.log(`Failed to send email : ${res.data.err.message}`, {
              variant: "error",
            });

            setIsProcessing(false);
          }
        })
        .catch((err) => {
          console.log("we trying to catch the error")
          console.log(`Failed to send email : ${err.message}`, {
            variant: "error",
          });

          setIsProcessing(false);
        });
    }
  };


  return (
    <Box sx={{ background: "#e1eef5", color: "#ffff" , height:"830px",width:"100%",ontFamily:"sans serif", fontWeight:"bold"}}>
      {/*Purple mountain*/}
    <Box><Image src="/Montains.png" alt="mountain"  width={1350} height={300}/></Box>

      {/*About us heading text*/}

      <Box sx={cloudContainer}>
        <Box className={style.contactUsCloud1}></Box>
        <Box
        sx={{ display: "flex", alignItems: "center",marginRight:"100px"}}
        paddingTop={2}
        justifyContent="center"
      >
        <Typography
          className="displayText viewText"
          variant={"h2"}
          fontSize={40}
          sx={box1header}

        >
          C
        </Typography>
        <Typography
          // sx={{ color: "#42475B" }}
          className="displayText "
          variant={"h2"}
          fontSize={40}
          sx={box2header}
        >
          ontact Us
        </Typography>
      </Box>
        <Box className={style.contactUsCloud2}></Box>
      </Box>

      {/* left Side */}
      <Box sx={contactUsSection} paddingRight={7}>

        <Box sx={{marginBottom:"30px"}}>
          <Box sx={{ display: "flex", alignItems:"center", justifyContent:"center"}}>
            <Typography sx={{fontSize:"23px", fontWeight:"bolder", paddingRight:"10px"}}>Contact: </Typography>
  
            <Typography sx={{ color: "#42475B" }}>
              0110 000 000
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection:"column", marginTop:"5px"}}>
            <Typography sx={{fontSize:"22px", fontWeight:"bolder"}}>Email Address:</Typography>
            <Typography sx={{ color: "#42475B" }}>
              church@heavenabove.glory
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginTop:"5px" }}>
            <Typography sx={{fontSize:"22px", fontWeight:"bolder"}}>Address:</Typography>
            <Typography sx={{ color: "#42475B", marginLeft:"5px"}}>
              26A Loveday
            </Typography>
          </Box>
          <Typography sx={{ color: "#42475B" }}>
            {"Street South,Selby"}
          </Typography>

          <Box marginTop={4} />
          <Box
            onClick={handleOpen}
            sx={{ background: "#42475B", color: "#E7D38A", fontWeight:"bold", fontSize:"16px", height:"35px",width:"120px",display:"flex", alignItems:"center", justifyContent:"center", marginTop:"10px", borderRadius:"2px", cursor:"pointer"}}
          >
            View Map
          </Box>
          <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                bgcolor: "background.paper",
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
              }}
            >
              
              <Box sx={{display:'flex'}}>
                <Box sx={{flexGrow:'1'}} />
                <Button onClick={handleClose} sx={{background: "#42475B", color: "#E7D38A", marginBottom:"10px"}} variant="contained" >X</Button>
              </Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.401982051986!2d28.041989499999996!3d-26.216125099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e95f6a6c0db%3A0xc2e1d5cdfa4a5cb3!2sThe%20Active%20Church!5e0!3m2!1sen!2sza!4v1668431475133!5m2!1sen!2sza"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </Box>
          </Modal>
        </Box>



        {/* grid */}
        <form
        sx={nameSection} >
          <Grid >

            <Box sx={{display:"flex"}}>
            <Grid item sx={{fontSize:"18px"}}>
              Name & Surname
            </Grid>
            <Grid item >
              <Input
                name="name"
                onChange={handleFieldChange}
                value={form.name}
                style={{ border: "2px solid #42475B", width:"350px", height:"60px", marginLeft:"15px",borderRadius: "5px",paddingTop:"20px", paddingLeft:"5px" }}
              />
            </Grid>

            </Box>

           


           <Box sx={{display:"flex", marginTop:"17px"}}>
            <Box sx={{fontSize:"18px"}}>
              Email Address
            </Box>

           <Box sx={{fontSize:"22px"}}>
              <Input
                fullWidth
                type="email"
                  name="email"
                  variant="standard"
                  onChange={handleFieldChange}
                  value={form.email}
                sx={{ border: "2px solid #42475B" , width:"350px", height:"60px", marginLeft:"48px",borderRadius:"5px", paddingTop:"20px", paddingLeft:"5px"}}
              />
            </Box>
           </Box>

            <Box sx={{display:"flex", marginTop:"17px"}}>
            <Box sx={{fontSize:"17px", display:"flex", justfiyContent:"center",flexDirection:"column", width:"90px"}}>
              Description
              <Box sx={{mt:2,display:'flex',justifyContent:'flex-start'}}>
              <Button
                sx={{
                  fontSize:"17px",
                  pr: 2,
                  fontWeight:"bold",
                  background: "#42475B", 
                  color: "#E7D38A",
                  pointerEvents: processing ? "none" : "auto",
                  opacity: processing ? 0.8 : 1,
                  height: "38px",
                  width: "95px",
                  borderRadius:"2px"
                }}
                size="small"
                color="secondary"
                onClick={handleSubmit}
              >
                {processing ? (
                  <>
                    Sending
                    <Box sx={{ ml: 1 }}>
                    </Box>
                  </>
                ) : (
                  <>
                    Send
                  </>
                )}
              </Button>
              </Box>
            </Box>

            <Grid item sx={{fontSize:"22px"}}>
              <Input
                fullWidth
                width={"100%"}
                name="query"
                    onChange={handleFieldChange}
                    value={form.query}
                sx={{ border: "2px solid #42475B", width:"392px", height:"105px", marginLeft:"60px",borderRadius:"5px", paddingLeft:"5px", paddingBottom:"30px"}}
              />
            </Grid>
            </Box>

          </Grid>
        </form>

      </Box>
    </Box>
  );

};

export default ContactUs;

const contactUsSection = {
  display:"flex",
  alignItems:"Center",
  justifyContent:"center",
  justifyContent:"space-evenly",
  fontFamily:"sans serif",
  paddingLeft:"60px"
}


const nameSection = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  height:"260px",
  justifyContent:"space-between",
  marginTop:"10px",
  marginLeft:"20px",
}

const cloudContainer = {
  width:"100%",
  height:"200px",
  display:"flex",
  alignItems:'center',
  justifyContent:"center",
  marginBottom:"30px",
  justifyContent:"space-evenly",
  marginTop:"-60px"
}

const box2header = {
  display: "flex",
  padding: "8px 0px",
  color: "white",
  alignItems: "center",
  fontFamily: displayText,
  fontSize: "38px",
}

const box1header = {
  display: "flex",
  padding: "8px 0px",
  color: "#FF00FF",
  alignItems: "center",
  fontFamily: displayText,
}