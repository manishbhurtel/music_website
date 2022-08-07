import React from 'react'
import '../HOME/CSS/Cards.css'

function Cards(props) {
    return (
        <>
            <div className="card">
                <img src={props.img} alt="cardImg" className='cardIMG'/>
                <p className="para10">{props.para10}</p>
                <p className="para11">{props.para11}</p>
            </div>
        </>
    )
}

export default Cards