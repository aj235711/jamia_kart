import React from "react";
import { Col, Row } from "reactstrap";
import NavBar from './NavBar.js';
import Nav2 from './Nav2.js';
import LeftBox from './LeftBox.js';
import VerticalLine from './VerticalLine.js';


const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Nav2 />
            <LeftBox />
            {/* <VerticalLine /> */}
        </div>
    )
}

export default HomePage