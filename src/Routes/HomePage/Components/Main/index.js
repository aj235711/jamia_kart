import React from "react";
import { Container, Col, Row } from "reactstrap";
import LeftBox from './LerftBox/index.js';
import RightBox from "./RightBox/index.js";

const Main = ({selectedCategory}) => {
    return (
        <div style={{minWidth: '1294px', overflowX: 'auto'}}>
            <div className="w-25">
                <LeftBox />
            </div>
            <div className='w-75'>
                <RightBox selectedCategory={selectedCategory}/>
            </div>
        </div>
    )
}

export default Main