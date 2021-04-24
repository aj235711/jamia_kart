import React from "react";
import Image from './Components/Image.js';
import DetailBox from './Components/DetailBox.js';
import RightBox from './Components/RightBox.js';
import NavBar from '../../Components/NavBar.js';
import Nav2 from '../../Components/Nav2.js';
import {useLocation} from 'react-router-dom';

const ProductPage = () => {

    const location=useLocation();

    const { id, name, price, imgTag, category, description} = location.state;
    
    return (
        <div>
            <NavBar />
            <Nav2/>
            <Image imgTag={imgTag}/>
            <DetailBox name={name} price={price} description={description} />
            <RightBox />
        </div>
    )
}

export default ProductPage