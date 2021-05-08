import * as React from "react";
import { Container, Col, Row } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Spinner,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import JamiaKart from "../../utils/JamiaKart.jpg";
import Nav from "./Nav";
import { serverLink } from "../../utils/constants";
import { toast } from "react-toastify";
const qs = require("qs");

const LoginForm = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [changePasswordLoading, setChangePasswordLoading] = React.useState(
    false
  );
  const [changePasswordModal, setChangePasswordModal] = React.useState(false);
  const handleSubmit = (event, values) => {
    setLoading(true);
    console.log(values);
    axios
      .post(
        `${serverLink}/login/`,
        qs.stringify({
          username: values.email,
          password: values.password,
        })
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("jwt", res.data.access_token);
        axios
          .get(`${serverLink}/user/`, {
            headers: {
              Authorization: "bearer " + localStorage.getItem("jwt"),
            },
          })
          .then((res) => {
            setLoading(false);
            localStorage.setItem("user", JSON.stringify(res.data));
            history.push(
              res.data.category === "customer"
                ? "/jamia_kart"
                : "/sellerhomepage"
            );
            toast.dark("Logged in successfully");
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            toast.error("Invalid credentials");
          });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Invalid credentials");
      });
  };

  const handleChangePassword = (event, values) => {
    setChangePasswordLoading(true);
    axios
      .put(`${serverLink}/user/pass/${values.email}`, {
        password: values.newPassword,
      })
      .then((res) => {
        setChangePasswordLoading(true);
        setChangePasswordModal(!changePasswordModal);
        toast.dark("Password Changed Successfully!!");
      })
      .catch((err) => {
        setChangePasswordLoading(false);
        toast.error("Trouble reaching servers");
      });
  };

  return (
    <>
      <Nav />
      <div
        className="d-flex align-items-center justify-content-center bg-light"
        style={{ height: "90vh" }}
      >
        <Col
          md="3"
          className="border border-secondary rounded p-4 bg-white m-3"
        >
          <Col md="12">
            <AvForm onValidSubmit={handleSubmit}>
              <Col md="12" className="d-flex justify-content-center">
                <img src={JamiaKart} className="w-100 pb-2 px-5" />
              </Col>
              <Row>
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
                <FormGroup className="w-100 d-flex justify-content-center">
                  {!loading ? (
                    <Button type="submit" outline color="info">
                      Sign In
                    </Button>
                  ) : (
                    <Spinner color="info" />
                  )}
                </FormGroup>
                <FormGroup className="w-100 d-flex justify-content-center align-items-center">
                  <small
                    style={{
                      color: "#332288",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => setChangePasswordModal(!changePasswordModal)}
                  >
                    Forgot Password?
                  </small>
                </FormGroup>
                <FormGroup className="w-100 d-flex justify-content-center align-items-center">
                  <small>Don't have an account?</small>
                  <small
                    className="ml-2"
                    style={{
                      color: "#332288",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => history.push("/register")}
                  >
                    Register
                  </small>
                </FormGroup>
              </Row>
            </AvForm>
          </Col>
        </Col>
        <Modal
          isOpen={changePasswordModal}
          toggle={() => setChangePasswordModal(!changePasswordModal)}
        >
          <ModalHeader
            toggle={() => setChangePasswordModal(!changePasswordModal)}
          >
            Change Password
          </ModalHeader>
          <AvForm onValidSubmit={handleChangePassword}>
            <ModalBody>
              <Col md="12">
                <AvField name="email" label="Email" type="email" required />
              </Col>
              <Col md="12">
                <AvField
                  name="newPassword"
                  type="password"
                  label="New Password"
                />
              </Col>
            </ModalBody>
            <ModalFooter>
              <Button
                color={changePasswordLoading ? "secondary" : "info"}
                outline
                type="submit"
                disabled={changePasswordLoading}
              >
                Change Password
              </Button>{" "}
              <Button
                color="secondary"
                outline
                onClick={() => setChangePasswordModal(!changePasswordModal)}
              >
                Cancel
              </Button>
            </ModalFooter>
          </AvForm>
        </Modal>
      </div>
    </>
  );
};

export default LoginForm;
