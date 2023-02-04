import { Box, Button, Container, Typography } from "@mui/material";

import React from "react";
import heroBackgroundImage from "../../images/baner.jpeg";
import {useNavigate} from "react-router-dom"
export default function Banner() {
const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: 1,
        position: "relative",
        backgroundImage: `url("${heroBackgroundImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 64%",
        backgroundSize: "cover",
       
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none"}}
        src={heroBackgroundImage}
        alt="increase priority"
      />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <Box mt={10} mb={5}  sx={{ maxWidth: 752, margin: 5 }}>
            
          <Typography variant="h2" color="initial" mb={5} textAlign="center" sx={{outline: "white", margin: 3,  zIndex: 4}}>
            Welcome, Get Your Best Car Insurance Quote Today!
          </Typography>
    

          <Typography
            variant="body1"
            color="white"
            align="center"
            sx={{ textAlign: "center" }}
          >
            We guarantee to provide you with the lowest quote available! 
          </Typography>

          <Box
            mt={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" size="large" color="warning" sx={{ mr: 1 }} onClick={() =>navigate("./form")}>
              Get a Quote!
            </Button>
            <Button variant="outlined" size="large" color="warning" onClick={() => window.location = 'mailto:m9insurance@outlook.com'} >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}