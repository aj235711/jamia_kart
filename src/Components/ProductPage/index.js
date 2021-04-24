import React from "react";
import Image from './Image.js';
import DetailBox from './DetailBox.js';
import RightBox from './RightBox.js';
import NavBar from '../HomePage/NavBar.js';
import Nav2 from '../HomePage/Nav2.js';


const ProductPage = () => {
    return (
        <div>
            <NavBar />
            <Nav2/>
            <Image />
            <DetailBox />
            <RightBox />
        </div>
    )
}

export default ProductPage