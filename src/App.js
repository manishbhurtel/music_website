import React from "react";
import Body from "./components/HOME/Body";
// import Navbar from "./components/Navbar";
import "../src/components/All.css";
import { Route, Routes } from "react-router";
import Login from "./components/LOGIN/Login";
import Signup from "./components/LOGIN/Signup";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Login" element={<Login
          para12="Create your Ideas"
          para13="We provide you platform to create your own musical instrument and allow you to sell across the world."
          para14="Welcome Back"
        />} />
        <Route path="/Signup" element={<Signup 
          para17="Join with us"
          para18="We will provide best services in the world that no one else have provided till now"
          para19="Join with us"
          />} />
      </Routes>
    </>
  );
}

export default App;
