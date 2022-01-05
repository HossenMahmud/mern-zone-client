import React, { useState } from 'react'
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import './CreatePost.css';
import RichTextEditor from '../RichTextEditor/RichTextEditor ';
import useAuth from '../../Hooks/useAuth';


const CreatePost = () => {
    const { user } = useAuth();
    const [value, setValue] = useState("");
    const [postData, setPostData] = useState({});

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const getValue = (value) => {
        setValue(value);
    };



    const email = `${user.email}`;
    const name = `${user.displayName}`;

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPostData = { ...postData };
        newPostData[field] = value;
        setPostData(newPostData);
    }


    const allPostData = {
        email: email,
        name: name,
        body: value,
        date: date,
        ...postData,
    }


    const handleOrderSubmit = (e) => {
        // Collect data
        const post = {
            ...allPostData,
        }
        fetch("https://shrouded-tundra-76213.herokuapp.com/addPost", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(post),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Successfully Publish This Post");
                    e.target.reset();
                }
            });
        e.preventDefault();
    }

    return (
        <>
            <Navigation></Navigation>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-12 create-post-body text-start">
                        <div className='py-3'>
                            <h1>Create Post</h1>
                        </div>
                        <form onSubmit={handleOrderSubmit}>
                            <div class="mb-3">
                                <input type="text" name="coverImg" onBlur={handleOnBlur} className="form-control" id="exampleInputPassword1" placeholder='Add Cover Photo Image Link (Optional)' />
                            </div>
                            <div class="mb-3">
                                <input required type="text" name="title" onBlur={handleOnBlur} className="form-control" id="exampleInputPassword1" placeholder='New Post Title Here' />
                            </div>
                            <RichTextEditor initialValue="" getValue={getValue} />
                            <button type="submit" className="btn btn-warning my-3">Publish Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default CreatePost;
