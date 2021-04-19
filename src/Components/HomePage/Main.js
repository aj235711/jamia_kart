import React from "react";
import { Container, Col, Row } from "reactstrap";
import LeftBox from './LeftBox.js';
import RightBox from "../Data/RightBox.js";

const Main = () => {
    return (
        <div style={{minWidth: '1294px', overflowX: 'auto'}}>
            <div className="w-25">
                <LeftBox />
            </div>
            <div className='w-75'>
                <RightBox />
            </div>
        </div>
    )
}

export default Main