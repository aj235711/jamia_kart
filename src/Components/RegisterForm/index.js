import * as React from "react";
import { Container, Col } from "reactstrap";
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

const RegisterForm = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ height: "100vh" }}
    >
      <Col md="3" className="border border-secondary rounded p-4 bg-white m-3">
        <Col md="12">
          <AvForm>
            <AvField name="name" label="Name" required />
            <AvField name="email" label="Email" type="email" required />
            <AvField
              name="password"
              label="Password"
              type="password"
              required
            />
            <AvField
              name="confirm_password"
              label="Confirm Password"
              type="password"
              required
            />

            <AvField
              type="select"
              name="select"
              label="Option"
              // helpMessage="Idk, this is an example. Deal with it!"
            >
              <option>Customer</option>
              <option>Salesman</option>
              <option>Admin</option>
            </AvField>
          </AvForm>
        </Col>
      </Col>
    </div>
  );
};

export default RegisterForm;
