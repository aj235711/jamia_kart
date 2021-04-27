import * as React from "react";
import { Col, Row } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useHistory } from "react-router-dom";
import { Button, FormGroup } from "reactstrap";
import JamiaKart from "../../utils/JamiaKart.jpg";
import axios from "axios";

const RegisterForm = () => {
  const history = useHistory();

  const handleSubmit = (event, values) => {
    console.log(values);
    axios
      .post("http://localhost:8000/user/", {
        name: values.name,
        email: values.email,
        password: values.password,
        category: values.userType,
        location: values.address,
      })
      .then((res) => {
        console.log(res);
        history.push("/jamia_kart");
      });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ height: "100vh" }}
    >
      <Col md="6" className="border border-secondary rounded p-4 bg-white m-3">
        <AvForm onValidSubmit={handleSubmit}>
          <Row>
            <Col
              md="12"
              className="d-flex justify-content-center"
              style={{ height: "60px", width: "150px" }}
            >
              <img src={JamiaKart} className="pb-2 px-5" />
            </Col>
            <Col md="6">
              <AvField name="name" label="Name" required />
            </Col>
            <Col md="6">
              <AvField name="email" label="Email" type="email" required />
            </Col>
            <Col md="6">
              <AvField
                name="password"
                label="Password"
                type="password"
                required
              />
            </Col>
            <Col md="6">
              <AvField
                name="confirm_password"
                label="Confirm Password"
                type="password"
                required
              />
            </Col>
            <Col md="6">
              <AvField type="select" name="userType" label="User Type" required>
                <option value="customer">Customer</option>
                <option value="seller">Salesman</option>
              </AvField>
            </Col>
            <Col md="6">
              <AvField name="address" label="Address" required />
            </Col>
            <FormGroup className="w-100 d-flex justify-content-center">
              <Button type="submit" outline color="info">
                Sign Up
              </Button>
            </FormGroup>
            <FormGroup className="w-100 d-flex justify-content-center align-items-center">
              <div>Already have an account?</div>
              <div
                className="ml-3"
                style={{
                  color: "#332288",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => history.push("/login")}
              >
                Login
              </div>
            </FormGroup>
          </Row>
        </AvForm>
      </Col>
    </div>
  );
};

export default RegisterForm;
