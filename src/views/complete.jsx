import React from "react";
import { Box, Container} from "@mui/system";
import { Typography, TextField, Divider, Button, InputLabel, Select } from "@mui/material";
import { CssBaseline, Link } from "@mui/material";
import Navbar from "./sections/NavBar";
import Banner from "./sections/Banner";
import heroBackgroundImage from "C:/Users/Steven P/Desktop/Insurance/insurance/insurance/src/images/baner.jpeg";
import {useNavigate} from "react-router-dom"

const Completed = () => {
    const navigate = useNavigate();
    return (
<CssBaseline>
<React.Fragment> 
<Container
          disableGutters
          maxWidth="false"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}>
            <Navbar />
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
            
          <Typography variant="h2" color="initial" mb={5} textAlign="center"  sx={{outline: "white", margin: 3,  zIndex: 4}}>
           M9 Insurance
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
            
            <Button variant="outlined" size="large" color="warning"  onClick={() => window.location = 'mailto:m9insurance@outlook.com'}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
    <Box sx={{height: "5vh", maxWidth: "80%", backgroundColor: "orange", borderTopRightRadius: "2vh", marginTop: 2}}></Box>
           <Box sx={{textAlign: "center", alignContent: "center"}}>
            <Typography variant="h4" sx={{display: "flex", margin: 2, font: "bold", }}>
                Thank you for your time!
            </Typography>
            <Box>
           <Typography variant="h6" sx={{display: "flex", margin: 2, font: "bold", }}>
                One of our team members will contact you shortly to discuss your quotes.
            </Typography>
           </Box>
           <Box>
            <Button variant="outlined" color="warning" onClick={()=> navigate("/")}>Home</Button>
           </Box>
           </Box>
         
           
        <Box
        
        sx={{
            flexDirection: "column",
             textAlign: "center",
             margin: 5,
             

        }}>

        </Box>
        </Container>
        </React.Fragment>
        </CssBaseline>
    );
};

export default Completed;
