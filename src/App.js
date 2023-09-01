import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Market from "./components/Market/Market";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Market />
    </BrowserRouter>
  );
}

export default App;
