import React from "react";
import ReactDom from "react-dom";
import CreatePost from '../../CreatePost/CreatePost';
// import {render} from  '@testing-library/react'

it("renders without crashing", () => {

    const div = document.createElement("div");
    ReactDom.render(<CreatePost></CreatePost>, div)

})