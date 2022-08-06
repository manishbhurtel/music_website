import React, { useState } from 'react'
import '../components/HOME/CSS/Navbar.css'
import '../components/All.css'
import navLOGO from '../images/logo.png'

function Navbar() {
  const [display, setdisplay] = useState("hidden")
  const [logo, setlogo] = useState("fa-solid")
  const burgerCLicked = () => {
    if (display === "hidden") {
      setdisplay("");
    }
    else {
      setdisplay("hidden");
    }
    if (logo === "fa-solid") {
      setlogo("fa-times");
    }
    else {
      setlogo("fa-solid");
    }
  }
  return (
    <>
      <div className="nav_container">
        <div className="logo">
          <img src={navLOGO} alt="logonav" className='navImg' />
        </div>

        <div className={`links ${display}`}>
          <ul>
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>SERVICES</li>
            <li>ABOUT</li>
            <li>SUBSCRIBE</li>
            <li><button className='btn1'><a href='mailto:manishbhurtel668@gmail.com'>Contact</a></button></li>
          </ul>
        </div>
        <i class={`fa-solid fa-bars ${logo}`} onClick={burgerCLicked}></i>
      </div>
    </>
  )
}

export default Navbar