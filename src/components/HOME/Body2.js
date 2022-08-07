import React from 'react'
import '../HOME/CSS/Body2.css'

function Body2(props) {
  return (
    <>
      <div className="body2_container">
        <div className="textarea">
          <p>{props.para4}</p>
          <p>{props.para5}</p>
          <button>See More</button>
        </div>
      </div>
    </>
  )
}

export default Body2