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
                    <Link to="/Login"><a><i class="fa-solid fa-circle-left"></i></a></Link>
                    <p className="loginIMG">@World Music</p>
                    <div className="wrap_content">
                        <div className="contentsL">
                            <p className='para12'>{props.para17}</p>
                            <p className="para13">{props.para18}</p>
                        </div>
                    </div>
                </div>

                <div className="sign_box">
                    <p className="para14">{props.para19}</p>
                    <input type="email" className='email' placeholder='Email' />
                    <input type="password" className='password' placeholder='Password' />
                    <input type="submit" placeholder='Login' className='login' />
                    <div className="signin">
                        <p className="para20">Already have an account?</p>
                        <p className="para21"><Link to="/Login"><a>Login</a></Link></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup