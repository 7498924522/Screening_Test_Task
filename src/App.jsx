import { useState } from "react";
import BackGround_image from "./assets/BackGround_Image.jpg";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/NAVBAR/Navbar";

function App() {
  return (
    <>
    <div
      className="min-h-screen bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: `url(${BackGround_image})`,
        backgroundPosition: "top -120px center",
      }}
    >
    <Navbar/>
    <Home/>
    </div>
    
    
    </>
  );
}

export default App;
