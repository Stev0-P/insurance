import {
    Box,
    Container,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  
  import BoltIcon from "@mui/icons-material/Bolt";
  import DiamondIcon from "@mui/icons-material/Diamond";
  import DoneIcon from "@mui/icons-material/Done";
  import React from "react";
  
  function Item(props) {
    const { icon, title, children } = props;
  
    const Icon = icon;
  
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 6,
        }}
      >
        <Box
          sx={{
            bgcolor: "warning.light",
            width: 72,
            height: 72,
            borderRadius: 50,
            position: "relative",
          }}
        >
          <Icon
            sx={{
              margin: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: 40,
            }}
          />
        </Box>
  
        <Typography variant="h4" mt={2} align="center">
          {title}
        </Typography>
  
        <Typography variant="body1" mt={2} align="center">
          {children}
        </Typography>
      </Box>
    );
  }
  
  const serviceItems = [
    {
      icon: DoneIcon,
      title: "Affordable Prices",
      description:
        "Our team is dedicated to provide you with the best quotes currently available to you!",
    },
    {
      icon: DiamondIcon,
      title: "Quick Responses",
      description:
        "Your time is our priority, contact us and we will be happy to help as soon as possible.",
    },
    {
      icon: BoltIcon,
      title: "Best Insurers",
      description:
        "We provide quotes from the best insurers on market and tailor specifically to meet your needs.",
    },
  ];
  
  export default function ServiceBenefits() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
      <Container sx={{marginTop: "5vh"}}>
        <Stack
          direction={matches ? "column" : "row"}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {serviceItems.map((item, index) => {
            return (
              <Item key={index} icon={item.icon} title={item.title}>
                {item.description}
              </Item>
            );
          })}
        </Stack>
      </Container>
    );
  }