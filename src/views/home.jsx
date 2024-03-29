import React from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import { CssBaseline, Typography,  } from "@mui/material";

import Stack from "@mui/material/Stack";

import Navbar from "./sections/NavBar";
import Banner from "./sections/Banner";
import ServiceBenefits from "./sections/ServiceBenefits";
import {useMediaQuery, useTheme} from "@mui/material";

import { grey } from "@mui/material/colors";
import image from "../images/contactUs.jpeg";
import image1 from "../images/insurance.jpeg";

import {useNavigate} from "react-router-dom"

const Home = () => {
  // TODO document why this arrow function is empty
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
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
          }}
        >
          <Box sx={{ bgcolor: "F5F5F5", height: "100vh" }}>
            <Navbar />
            <Banner />
            <ServiceBenefits />
            <Box sx={{ bgcolor: grey[200], py: 10 }}>
             <Container maxWidth="lg">
              <Stack direction={matches ? "column" : "row"} spacing={4}>
              <Box/>
              <Box component="img" src={image1} alt="image" sx={{height: "200px" , width: "300px", }}>

              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
              <Typography variant="h2" color="initial">
                Car Insurance
              </Typography>
              <Typography variant="body1" color="initial" sx={{ my: 4 }}>
                Click below to find out the best quote available to you on the market, please fill out information to the best of your knowledge
                so we will be able to provide you with most suitable insurance for you!
              </Typography>
              <Button variant="contained" size="large" color="warning" onClick={ () => navigate("./form")}>
                Get a Quote!
              </Button>
               </Box>
              </Box>
             </Stack>
             </Container>
             </Box>

             <Container sx={{ py: 10 }}>
      <Stack direction={matches ? "column" : "row"} spacing={4}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography variant="h2" color="initial">
              Contact Us
            </Typography>
            <Typography variant="body1" color="initial" sx={{ py: 4 }}>
              We are always happy to help you with any advice or enquiries regarding Car Insurance
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={() => window.location = 'mailto:m9insurance@outlook.com'}
              
              color="warning"
            >
              Contact Us
            </Button>
          </Box>
        </Box>
        <Box component="img" src={image} alt="branding-image" sx={{height: "200px" , width: "300px"}}></Box>
      </Stack>
    </Container>
          </Box>
        </Container>
      </React.Fragment>
    </CssBaseline>
  );
};

export default Home;
