import React from 'react'
import '../HOME/CSS/Footer.css'
import '../../.././src/components/All.css'


function Footer() {
  return (
    <>
      <div className="wrapIT">
        <div className="footer_container">

          <ul className="ul-1">
            <li className="fText">Follow Us: </li>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
          </ul>

          <div className="main_content">
            <ul className="ul-2">
              <li>Company Resources</li>
              <li>Contact US</li>
              <li>ABout us</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>

            <ul className="ul-3">
              <li>Support</li>
              <li>Help Center</li>
              <li>Feedback</li>
              <li>QNA</li>
            </ul>

            <ul className="ul-4">
              <li>Responsibilities</li>
              <li>Accessibility</li>
              <li>Crisis Response</li>
              <li>Learning</li>
              <li>Sustainability</li>
            </ul>

            <ul className="ul-5">
              <li>Our Location</li>
              <li>United States</li>
              <li>China</li>
              <li>Canada</li>
              <li>Japan</li>
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer