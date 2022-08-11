import React from 'react'
import '../LOGIN/CSS/Login.css'
import '../../.././src/components/All.css'
import { Link } from 'react-router-dom'

function Login(props) {
    return (
        <>
            <div className="login_container">

                <div className="login_content">
                    <Link to="/"><i class="fa-solid fa-circle-left"></i></Link>
                    {/* <p className="loginIMG">@World Music</p> */}
                    <div className="wrap_content">
                        <div className="contentsL">
                            <p className='para12'>{props.para12}</p>
                            <p className="para13">{props.para13}</p>
                        </div>
                    </div>
                </div>

                <div className="login_box">
                    <p className="para14">{props.para14}</p>
                    <input type="email" className='email' placeholder='Email' />
                    <input type="password" className='password' placeholder='Password' />
                    <input type="submit" placeholder='Login' className='login' />
                    <div className="signin">
                        <p className="para15">New User ?</p>
                        <p className="para16"><Link to="/Signup">Sign Up</Link></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login