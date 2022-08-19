import React from 'react'
import '../LOGIN/CSS/Signup.css'
import '../LOGIN/CSS/Login.css'
import '../../.././src/components/All.css'
import { Link } from 'react-router-dom'

function Signup(props) {
    return (
        <>
            <div className="sign_container">

                <div className="sign_content">
                    <Link to="/Login"><i className="fa-solid fa-circle-left"></i></Link>
                    {/* <p className="loginIMG">@World Music</p> */}
                    <div className="wrap_content">
                        <div className="contentsL">
                            <p className='para12'>{props.para17}</p>
                            <p className="para13">{props.para18}</p>
                        </div>
                    </div>
                </div>

                <div className="sign_box">
                    <p className="para14">{props.para19}</p>
                    <input type="text" placeholder='Full Name' className='name' />
                    <input type="email" className='email' placeholder='Email' />
                    <input type="password" className='password' placeholder='Set Password' />

                    <div className="ch1">
                        <input type="checkbox" className='checkbox1 ch' /><p className='log_para1'>I accept the privacy policy and terms and conditions</p></div>
                    <div className="ch2">
                        <input type="checkbox" className='checkbox2 ch' /><p className='log_para2'>Send me existing emails for further updates and changes</p></div>
                    <input type="submit" placeholder='Sign Up' className='login' />

                    <div className="signin">
                        <p className="para20">Already have an account?</p>
                        <p className="para21"><Link to="/Login">Login</Link></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup