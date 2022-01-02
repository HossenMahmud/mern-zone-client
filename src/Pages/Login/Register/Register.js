import React from 'react'
import './Register.css'
import profile from "../../../Componets/Images/profile.jpg";
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div>
            <div className="main">
                <div className="sub-main">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={profile} alt="profile" className="profile" />

                            </div>
                        </div>
                        <div>
                            <h3>Register</h3>
                            <div>
                                <input type="text" placeholder="Name" className="name" />
                            </div>
                            <div className="second-input">
                                <input type="text" placeholder="Email" className="name" />
                            </div>
                            <div className="second-input">
                                <input type="password" placeholder="Password" className="name" />
                            </div>
                            <div className="second-input">
                                <input type="password" placeholder="Re-enter Password" className="name" />
                            </div>
                            <div className="login-button">
                                <button>Register</button>
                            </div>

                            <p className="link">
                                Already have an account? <br /> Please <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}