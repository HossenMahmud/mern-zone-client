import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../../Hooks/useAuth';
import './MyPosts.css';

const MyPosts = () => {
    const { user } = useAuth();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${user.email}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    });

    // Order Delete Function
    const handleDelete = (id) => {
        let conform = window.confirm('Are You Sure Delete Item?');
        if (conform) {
            fetch(`http://localhost:5000/deleteBlog/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.deletedCount) {
                        alert('Succesfully Deleted')
                        const remainingUser = blogs.filter(user => user._id !== id);
                        setBlogs(remainingUser)
                    }

                });
        }
        else {
            alert('Delete Canceled')
        }

    };

    const handleEdit = (id) => {
        alert('Edit Option Comming Soon');
    }


    return (
        <div>
            <div className="container my-5">
                <div className="orders-title">
                    <h2 className='fw-bold'>MY Blogs</h2>
                </div>
                <div className="row">
                    <div className=" table-responsive table-responsive-sm table-responsive-md">
                        <table className="table table-dark table-striped">
                            <tbody>
                                {
                                    blogs.map((blog, index) => (
                                        <tr key={blog._id} className='text-start'>
                                            <td>{index}</td>
                                            <td>{blog.title}</td>
                                            <td>Published: {blog.date}</td>
                                            <td><i className="fas fa-heart love me-2"></i>{blog.like}  <span className='ms-3'>0</span>  <i className=" comment ms-1 fas fa-comment"></i></td>
                                            <td className='blog-icon'>
                                                <i className=" love fas fa-trash-alt icon2" onClick={() => handleDelete(blog._id)}></i>
                                                <i onClick={() => handleEdit(blog._id)} class="edit fas fa-edit ms-3"></i>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;