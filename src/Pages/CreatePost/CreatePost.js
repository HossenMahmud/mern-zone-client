import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import './CreatePost.css';
// import { Base64 } from 'js-base64';

const CreatePost = () => {
    const [value, setValue] = useState("");
    const handleOnChange = (e, editor) => {
        const data = editor.getData();
        setValue(data)
    }
    return (
        <>
            <Navigation></Navigation>


            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-12 create-post-body">
                        <div className='py-3'>
                            <h1>Create Post</h1>
                        </div>
                        <form>
                            <div class="mb-3 text-start">
                                <label style={{ 'color': 'blue', 'fontWeight': 'bold', 'fontSize': '18px' }} for="formFile" class="form-label">Add a cover photo</label>
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='New Post Title Here' />
                            </div>
                            <CKEditor className='post-editor'
                                editor={ClassicEditor}
                                onChange={handleOnChange}
                            />
                        </form>
                        <div>
                            {ReactHtmlParser(value)}
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default CreatePost;
