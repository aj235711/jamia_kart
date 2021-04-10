import React from "react";
import { Container, Col, Row } from "reactstrap";
import LeftBox from './LeftBox.js';
import RightBox from "../Data/RightBox.js";

const Main = () => {
    return (
        <Row>
            <Col md="3">
                <LeftBox />
            </Col>
            <Col md="9">
                <RightBox />
            </Col>
        </Row>
    )
}

export default Main