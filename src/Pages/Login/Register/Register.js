import React, { useState } from 'react'
import './Register.css'
import profile from "../../../images/profile.jpg";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

export default function Register() {
    const { registerUser, error, user, isLoading } = useAuth();
    const [registerData, setRegisterData] = useState({});
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    const handleRegisterSubmit = e => {
        if (registerData.password === registerData.repassword) {
            registerUser(registerData.email, registerData.password, registerData.name, navigate);
        }
        e.preventDefault();
    }



    return (
        <div>
            <div className="main container">
                <div className="sub-main">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={profile} alt="profile" className="profile" />

                            </div>
                        </div>
                        <div>
                            <h3>Register</h3>

                            <form onSubmit={handleRegisterSubmit}>
                                <div className='log-regi-input'>
                                    <input type="text" placeholder="Name" onBlur={handleOnBlur} name="name" className="name" />
                                </div>
                                <div className="second-input log-regi-input">
                                    <input type="email" onBlur={handleOnBlur} name="email" placeholder="Email" className="name" />
                                </div>
                                <div className="second-input log-regi-input">
                                    <input type="password" onBlur={handleOnBlur} name="password" placeholder="Password" className="name" />
                                </div>
                                <div className="second-input log-regi-input">
                                    <input type="password" placeholder="Re-enter Password" onBlur={handleOnBlur} name="repassword" className="name" />
                                </div>
                                <div className="login-button">
                                    <button>Register</button>
                                </div>

                                {isLoading && <div class="spinner-border text-warning" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>}
                                {user?.email && <div class="alert alert-success" role="alert">
                                    Successfully User Created
                                </div>}
                                {error && <div class="alert alert-success" role="alert">
                                    {error}
                                </div>}
                            </form>

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