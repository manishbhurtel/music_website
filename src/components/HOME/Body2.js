import React from 'react'
import '../HOME/CSS/Body2.css'
import '../../.././src/components/All.css'
import manLOGO from '../../.././src/images/man.png'

function Body2(props) {
  return (
    <>
      <div className="body2_container">
        <div className="textarea">
          <p className='para4'>{props.para4}</p>
          <p className='para5'>{props.para5}</p>
          <button className="b2-btn1">See More</button>
        </div>
        <img src={manLOGO} alt="manImg" className='manImg' />
      </div>
    </>
  )
}

export default Body2