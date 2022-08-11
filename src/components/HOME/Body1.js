import React from 'react'
import '../HOME/CSS/Body1.css'
import '../All.css'
import { Link } from 'react-router-dom'

function Body1(props) {
  return (
    <>
      <div className="body1_container">
        <div className="wrapper">
          <p className='para1'>{props.para1} <br /> {props.para2}</p>
          <p className='para2'>{props.para3}</p>
          <button className="b1-btn1"><Link to="/Login"><a>Explore Products</a></Link></button>
          <button className="b1-btn2"><Link to="/"><a>Subscribe Now</a></Link></button>
        </div>
      </div>
    </>
  )
}

export default Body1