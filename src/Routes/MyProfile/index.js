import * as React from "react";
import axios from "axios";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Modal,
  ModalFooter,
  ModalBody,
} from "reactstrap";
import { toast } from "react-toastify";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useHistory } from "react-router-dom";

import { serverLink } from "../../utils/constants";

const MyProfile = () => {
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [deleteAccountLoading, setDeleteAccountLoading] = React.useState(false);
  const [deleteAccountModal, setDeleteAccountModal] = React.useState(false);

  const deleteAccount = (event, values) => {
    setDeleteAccountLoading(true);
    axios
      .delete(
        `${serverLink}/user/${
          JSON.parse(localStorage.getItem("user")).email
        }?pswd=${values.password}`,
        {
          headers: {
            Authorization: "bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((res) => {
        setDeleteAccountLoading(false);
        setDeleteAccountModal(!deleteAccountModal);
        localStorage.setItem("user", undefined);
        history.push("/login");
        toast.dark("Account deleted successfully!");
      })
      .catch((err) => {
        setDeleteAccountLoading(false);
        toast.error("Trouble reaching servers");
      });
  };

  const handleSubmit = (event, values) => {
    setLoading(true);
    axios
      .put(
        `${serverLink}/user/${JSON.parse(localStorage.getItem("user")).email}`,
        {
          name: values.name,
          loc: values.address,
          phone_number: values.phoneNumber,
        },
        {
          headers: {
            Authorization: "bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.dark("Updated successfully");
      })
      .catch((err) => {
        setLoading(false);
        toast.error("An error occured!");
      });
  };

  return (
    <>
      <Col
        md="12"
        style={{ marginTop: "20vh", height: "78vh" }}
        className="d-flex justify-content-center align-items-start"
      >
        <Col md="6" className="shadow-sm border p-4 bg-white m-3">
          <Col
            md="12"
            className="d-flex justify-content-center border-bottom pb-2 mb-3"
          >
            <h5>My Profile</h5>
          </Col>
          <Col md="12">
            <AvForm
              onValidSubmit={handleSubmit}
              model={{
                name: JSON.parse(localStorage.getItem("user")).name,
                address:
                  JSON.parse(localStorage.getItem("user")).category ===
                  "customer"
                    ? JSON.parse(localStorage.getItem("user")).customer_detail
                        .loc
                    : JSON.parse(localStorage.getItem("user")).seller_detail
                        .loc,
                phoneNumber:
                  JSON.parse(localStorage.getItem("user")).category ===
                  "customer"
                    ? JSON.parse(localStorage.getItem("user")).customer_detail
                        .phone_number
                    : JSON.parse(localStorage.getItem("user")).seller_detail
                        .phone_number,
              }}
            >
              <Row>
                <Col md="6">
                  <AvField name="name" label="Name" required />
                </Col>
                <Col md="6">
                  <AvField
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                    required
                  />
                </Col>
                <Col md="12">
                  <AvField name="address" label="Address" required />
                </Col>
                <FormGroup className="w-100 d-flex justify-content-center">
                  <Button
                    type="submit"
                    outline
                    color={!loading ? "info" : "secondary"}
                    disabled={loading}
                  >
                    Save Changes
                  </Button>
                </FormGroup>
              </Row>
            </AvForm>
          </Col>
        </Col>
        <Button
          style={{ position: "absolute", bottom: "20px", right: "30px" }}
          outline
          color="danger"
          onClick={() => setDeleteAccountModal(!deleteAccountModal)}
        >
          Delete Account
        </Button>
      </Col>

      <Modal
        isOpen={deleteAccountModal}
        toggle={() => setDeleteAccountModal(!deleteAccountModal)}
        size="lg"
        centered
      >
        <AvForm onValidSubmit={deleteAccount}>
          <ModalBody className="py-5 d-flex align-Accounts-center">
            <Col md="12">
              <Col md="12">
                Are you sure you want to delete your account from JamiaKart?
                Enter your password below.
              </Col>
              <Col md="12" className="d-flex justify-content-center mb-0 mt-5">
                <AvField name="password" type="password" />
              </Col>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button
              outline
              color={deleteAccountLoading ? "secondary" : "danger"}
              disabled={deleteAccountLoading}
              type="submit"
            >
              Yes, Delete
            </Button>{" "}
            <Button
              outline
              color="secondary"
              onClick={() => setDeleteAccountModal(!deleteAccountModal)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    </>
  );
};

export default MyProfile;
