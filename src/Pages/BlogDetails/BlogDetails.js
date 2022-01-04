import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import ReactHtmlParser from 'react-html-parser';
import './BlogDetails.css';
import profileImg from '../../images/blog-man.png';

const BlogDetails = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();
    // use to get single product
    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id]);

    return (
        <>
            <Navigation></Navigation>
            <div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-10 col-12 col-sm-12 col-md-12 offset-lg-1">
                            <div className="blog-details">
                                <div className="blog-details-img">
                                    <img className='img-fluid' src={blog.coverImg} alt="" />
                                </div>
                                <div className='d-flex my-3'>
                                    <div className="profile-img mt-2">
                                        <img className='img-fluid' src={profileImg} alt="" />
                                    </div>
                                    <div className='ms-2 text-start'>
                                        <h6 style={{ 'fontWeight': 'bold' }}>{blog.name}</h6>
                                        <p>Posted On :{blog.date}</p>
                                    </div>
                                </div>
                                <h2 className='my-3 fw-bold'>{blog.title}</h2>
                                <div className='text-start'>{ReactHtmlParser(blog.body)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default BlogDetails;