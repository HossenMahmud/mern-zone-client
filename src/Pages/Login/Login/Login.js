import React, { useState } from 'react'
import './Login.css'
import profile from "../../../images/profile.jpg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

export default function Login() {
    const { loginUser, signInWithGoogle } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <div>
            <div className="main container">
                <div className="login-main">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={profile} alt="profile" className="profile" />

                            </div>
                        </div>
                        <div>
                            <h3>Login</h3>
                            <form onSubmit={handleLoginSubmit}>
                                <div className='log-regi-input'>
                                    <input name="email" onBlur={handleOnBlur} type="email" placeholder="Email" className="name" />
                                </div>
                                <div className="second-input log-regi-input">
                                    <input type="password" name="password" onBlur={handleOnBlur} placeholder="Password" className="name" />
                                </div>
                                <div className="login-button">
                                    <button>Login</button>
                                </div>
                            </form>
                            <p className="link">
                                New to MERN Zone? <br />
                                <Link to="/register">Create New Account</Link>
                            </p>
                            <div className="google-signup">
                                <button onClick={handleGoogleSignIn} className="google-signup-btn">Login With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}