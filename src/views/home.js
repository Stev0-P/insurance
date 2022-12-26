import React from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

const Home = () => {
  // TODO document why this arrow function is empty
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Box sx={{ marginTop: "500px" }}>
        <Button variant="outlined">Get A Quote!</Button>
      </Box>
    </Box>
  );
};

export default Home;
