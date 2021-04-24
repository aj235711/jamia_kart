import React from "react";
import Image from './Components/Image.js';
import DetailBox from './Components/DetailBox.js';
import RightBox from './Components/RightBox.js';
import NavBar from '../../Components/NavBar.js';
import Nav2 from '../../Components/Nav2.js';


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