import React from "react";
import { Box } from "@mui/system";

const Home = () => {
  // TODO document why this arrow function is empty
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        backgroundColor: "green",
        flexFlow: "column",
        height: "100%",
        alignItems: "center",
        width: 1,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 1,
          boxSizing: "border-box",
        },
      }}
    >
      <p>HEllo</p>
    </Box>
  );
};

export default Home;
