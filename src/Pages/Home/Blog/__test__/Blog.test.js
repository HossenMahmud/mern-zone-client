import React from "react";
import ReactDom from "react-dom";
import Blog from "../Blog";
// import {render} from  '@testing-library/react'

it("renders without crashing", () => {

    const div = document.createElement("div");
    ReactDom.render(<Blog></Blog>, div)

})