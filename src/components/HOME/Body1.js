import React from 'react'
import '../HOME/CSS/Body1.css'
import '../All.css'

function Body1(props) {
  return (
    <>
      <div className="body1_container">
        <div className="wrapper">
          <p className='para1'>{props.para1} <br /> {props.para2}</p>
          <p className='para2'>{props.para3}</p>
          <button className="b1-btn1">Explore Products</button>
          <button className="b1-btn2">Subscribe Now</button>
        </div>
      </div>
    </>
  )
}

export default Body1