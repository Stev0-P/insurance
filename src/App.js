import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/home";
import Form from "./views/form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
