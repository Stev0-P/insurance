import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/home.jsx";
import Form from "./views/form.jsx";
import Completed from "./views/complete.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
