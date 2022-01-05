import React, { useEffect, useState } from 'react';
// import ReactHtmlParser from 'react-html-parser';
import './Blog.css';
import UserImg from '../../../images/blog-man.png';
import { Link } from 'react-router-dom';
//import useAuth from '../../../Hooks/useAuth';

const Blog = () => {
    //const { user } = useAuth();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-tundra-76213.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);



    return (
        <div className='container my-5'>
            <div className="row">
                {
                    blogs.map(blog => <>
                        <div className="col-lg-6 mb-4">
                            <div className="blog-items">
                                <div className="blog-img">
                                    <img className='img-fluid' src={blog?.coverImg} alt="" />
                                </div>
                                <div className='p-3 text-start'>
                                    <div className='user-info text-start mt-3 d-flex'>
                                        <div className="user-img">
                                            <img className='img-fluid' src={UserImg} alt="" />
                                        </div>
                                        <div className='user-name ms-3'>
                                            <small>{blog?.name}</small>
                                            <p>{blog?.date}</p>
                                        </div>
                                    </div>
                                    <div className="blog-title">
                                        <h4>{blog?.title}</h4>
                                    </div>
                                    <div className="love-comment py-2">
                                        <i className="fas fa-heart"></i>
                                        <span>  {blog?.like} reactions</span>
                                        <i className=" ms-3 fas fa-comment"></i>
                                    </div>
                                </div>

                                <div className="blog-overlay">
                                    <div className="content">
                                        <div className="links">
                                            <Link className="link" to={`blog/${blog._id}`} style={{ textDecoration: 'none' }}>
                                                <i className="fas fa-link"></i>
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Blog;