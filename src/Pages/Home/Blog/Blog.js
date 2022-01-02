import React from 'react';
import './Blog.css';
import blogImg from '../../../images/blog-img.png'
import UserImg from '../../../images/blog-user-img.jpg'
import UserImg2 from '../../../images/blog-img2.jpg'

const Blog = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="blog-items">
                        <div className="blog-img">
                            <img className='img-fluid' src={blogImg} alt="" />
                        </div>
                        <div className='p-3 text-start'>
                            <div className='user-info text-start mt-3 d-flex'>
                                <div className="user-img">
                                    <img className='img-fluid' src={UserImg} alt="" />
                                </div>
                                <div className='user-name ms-3'>
                                    <small>Alex Carrry</small>
                                    <p>2 January 2022</p>
                                </div>
                            </div>
                            <div className="blog-title">
                                <h2>MongoDB CRUD Operations</h2>
                            </div>
                            <div className="love-comment py-2">
                                <i className="fas fa-heart"></i>
                                <span>  5 reactions</span>
                                <i class=" ms-3 fas fa-comment"></i>
                            </div>
                        </div>

                        <div className="blog-overlay">
                            <div className="content">
                                <div className="links">
                                    <a rel="noopener noreferrer" href="#home" className="link"><i className="fas fa-link"></i></a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="blog-items">
                        <div className="blog-img">
                            <img className='img-fluid' src={UserImg2} alt="" />
                        </div>
                        <div className='p-3 text-start'>
                            <div className='user-info text-start mt-3 d-flex'>
                                <div className="user-img">
                                    <img className='img-fluid' src={UserImg} alt="" />
                                </div>
                                <div className='user-name ms-3'>
                                    <small>Alex Carrry</small>
                                    <p>2 January 2022</p>
                                </div>
                            </div>
                            <div className="blog-title">
                                <h2>JavaScript Event Loop</h2>
                            </div>
                            <div className="love-comment py-2">
                                <i className="fas fa-heart"></i>
                                <span>  5 reactions</span>
                                <i class=" ms-3 fas fa-comment"></i>
                            </div>
                        </div>

                        <div className="blog-overlay">
                            <div className="content">
                                <div className="links">
                                    <a rel="noopener noreferrer" href="#home" className="link"><i className="fas fa-link"></i></a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;