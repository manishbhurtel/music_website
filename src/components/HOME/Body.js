import React from 'react'
import Body1 from './Body1'
import Body2 from './Body2'
import Body3 from './Body3'
import Body4 from './Body4'
import Footer from './Footer'

function Body() {
    return (
        <>
            <Body1
                para1="Life is a song"
                para2="Love is the music"
                para3="Discover 10 million+ musical instruments from different parts of world with different culture. Create love of music across the globe."
            />
            <Body2 
                para4= "WHAT YOU EXPECT FROM US"
                para5 = "We will provide you world's most popular music instruments that you can try and carry on your hobbies and create very fluent music. Checking and buying our musical products, you will never dissatisfy yourself."
            />
            <Body3 
                para6 = "Who we are"
                para7 = "Many people are interested in creating their career in music, so we are those who wants to help to pursue their career and their goals."
                para8 = "We are officially located in Pokhara, Nepal. We provide platforms for users to sell and buy their musical instruments so that world moves to new music reality."
            />
            <Body4 
                para9 = "What we do"
            />
            <Footer />
        </>
    )
}

export default Body