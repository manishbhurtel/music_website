import React from 'react'
import navLOGO from '.././images/logo.png'
import '../components/CSS/Navbar.css'

function Navbar() {
    return (
        <>
            <div className="nav_container">
                <div className="links1">
                    <ul>
                        <li>HOME</li>
                        <li>PRODUCTS</li>
                        <li>SERVICES</li>
                        <li><img src={navLOGO} alt="worldMusic" className='navIMG' /></li>
                        <li>ABOUT</li>
                        <li>DEALS</li>
                        <li>SUBSCRIBE</li>
                    </ul>
                </div>


                <div className="links2">
                    <ul>
                        <li>HOME</li>
                        <li>PRODUCTS</li>
                        <li>SERVICES</li>
                        <li><img src={navLOGO} alt="worldMusic2" className='navIMG' /></li>
                        <li>ABOUT</li>
                        <li>DEALS</li>
                        <li>SUBSCRIBE</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
