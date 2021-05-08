import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  return (
    <>
      {JSON.parse(localStorage.getItem("user")).category === "seller" ? (
        <Row style={{ marginTop: "10vh", height: "87vh" }}>
          <Col
            md="12"
            className="h-100 d-flex justify-content-center align-items-center flex-wrap"
          >
            <Col md="5" className="d-flex justify-content-end mr-3">
              <Button
                style={{ fontSize: "2rem" }}
                className="px-5 py-3"
                outline
                color="info"
                onClick={() => history.push("/addproduct")}
              >
                Create New Product
              </Button>
            </Col>
            <Col md="5" className="d-flex justify-content-start ml-3">
              <Button
                style={{ fontSize: "2rem" }}
                className="px-5 py-3"
                outline
                color="info"
                onClick={() => history.push("/myproducts")}
              >
                View My Products
              </Button>
            </Col>
          </Col>
        </Row>
      ) : (
        <Redirect to="/jamia_kart" />
      )}
    </>
  );
};

export default HomePage;
