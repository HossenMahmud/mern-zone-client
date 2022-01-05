import React, { useEffect, useState } from 'react';

const AllPosts = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-tundra-76213.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    // Order Delete Function
    const handleDelete = (id) => {
        let conform = window.confirm('Are You Sure Delete Item?');
        if (conform) {
            fetch(`https://shrouded-tundra-76213.herokuapp.com/deleteBlog/${id}`, {
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


    return (
        <div>
            <div className="container my-5">
                <div className="orders-title">
                    <h2 className='fw-bold'>All Blog Post</h2>
                </div>
                <div className="row">
                    <div className=" table-responsive table-responsive-sm table-responsive-md">
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th scope="col">Author Name</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Love$Comments</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blogs.map((blog, index) => (
                                        <tr key={blog._id}>
                                            <td>{index}</td>
                                            <td>{blog.name}</td>
                                            <td>{blog.title}</td>
                                            <td>{blog.date}</td>
                                            <td><i className="fas fa-heart love me-2"></i>{blog.like}  <span className='ms-3'>0</span>  <i className=" comment ms-1 fas fa-comment"></i></td>
                                            <td className='blog-icon'>
                                                <i className=" love fas fa-trash-alt icon2" onClick={() => handleDelete(blog._id)}></i>

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

export default AllPosts;