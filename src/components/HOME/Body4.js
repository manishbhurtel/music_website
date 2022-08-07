import React from 'react'
import '../HOME/CSS/Body4.css'
import '../../.././src/components/All.css'
import Cards from './Cards'
import cardImg1 from '../../.././src/images/Vector.png'
import cardImg2 from '../../.././src/images/Vector-1.png'
import cardImg3 from '../../.././src/images/Vector-2.png'

function Body4(props) {
  return (
    <>
      <div className="body4_container">
        <div className="b4-header">
          <p>{props.para9}</p>
        </div>

        <div className="card_container">
          <Cards img={cardImg1} para10 = "Deliever" para11 = "People can buy instruments"/>
          <Cards img={cardImg2} para10 = "Sell" para11 = "Allow people to sell instruments"/>
          <Cards img={cardImg3} para10 = "Musical Books" para11 = "We provide musical books"/>
        </div>
      </div>
    </>
  )
}

export default Body4