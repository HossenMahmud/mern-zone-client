import React from 'react'
import './Login.css'
import profile from "../../../Componets/Images/profile.jpg";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <div className="main">
                <div className="login-main">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={profile} alt="profile" className="profile" />

                            </div>
                        </div>
                        <div>
                            <h3>Login</h3>
                            <div>
                                <input type="text" placeholder="Email" className="name" />
                            </div>
                            <div className="second-input">
                                <input type="password" placeholder="Password" className="name" />
                            </div>
                            <div className="login-button">
                                <button>Login</button>
                            </div>

                            <p className="link">
                                New to MERN Zone? <br />
                                <Link to="/register">Create New Account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}