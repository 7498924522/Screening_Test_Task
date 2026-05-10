import { useState } from "react";
import BackGround_image from "./assets/BackGround_Image.jpg";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/NAVBAR/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    </>
  );
}

export default App;
