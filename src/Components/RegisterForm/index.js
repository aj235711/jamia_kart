import * as React from "react";
import { Col, Row } from "reactstrap";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import { Button, Label, FormGroup, CustomInput } from "reactstrap";
import JamiaKart from '../../utils/JamiaKart.jpg';
import axios from 'axios';

const RegisterForm = () => {

  const handleSubmit = (event, values) => {
    console.log(values);
    axios.post('http://localhost:8000/user/', {
      name: values.name,
      email: values.email,
      password: values.password,
      category: values.userType
    }).then(res=> console.log(res));
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ height: "100vh" }}
    >
      <Col md="3" className="border border-secondary rounded p-4 bg-white m-3">
        <AvForm onValidSubmit={handleSubmit}>
          <Row>
            <Col md="12" className="d-flex justify-content-center">
              <img src={JamiaKart} className="w-100 pb-2 px-5"/>
            </Col>
            <Col md="12">
              <AvField name="name" label="Name" required />
            </Col>
            <Col md="12">
              <AvField name="email" label="Email" type="email" required />
            </Col>
            <Col md="12">
              <AvField
                name="password"
                label="Password"
                type="password"
                required
              />
            </Col>
            <Col md="12">
              <AvField
                name="confirm_password"
                label="Confirm Password"
                type="password"
                required
              />
            </Col>
            <Col md="12">
              <AvField type="select" name="userType" label="User Type" required>
                <option disabled={true} default>
                  ---Select User Type---
                </option>
                <option>Customer</option>
                <option>Salesman</option>
                <option>Admin</option>
              </AvField>
            </Col>
            <FormGroup className="w-100 d-flex justify-content-center">
              <Button type="submit" outline color="info">
                Sign Up
              </Button>
            </FormGroup>
          </Row>
        </AvForm>
      </Col>
    </div>
  );
};

export default RegisterForm;
