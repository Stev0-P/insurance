import React from "react";
import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
