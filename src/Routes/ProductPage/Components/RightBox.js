import * as React from "react";
import {
  Button,
  Spinner,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { serverLink } from "../../../utils/constants";
import { toast } from "react-toastify";
import { AvForm, AvField } from "availity-reactstrap-validation";

const RightBox = ({ qty, id, name, price, sellerName }) => {
  const history = useHistory();

  const [quantity, setQuantity] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [orderNowModal, setOrderNowModal] = React.useState(false);
  const [orderNowLoading, setOrderNowLoading] = React.useState(false);

  const addToCart = () => {
    setLoading(true);
    axios
      .post(
        `${serverLink}/cart`,
        {
          product_id: id,
          qty: quantity,
        },
        {
          headers: {
            Authorization: "bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((res) => {
        setLoading(false);
        toast.dark("Successfully added to cart.");
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong.");
      });
  };

  const orderNow = (event, values) => {
    setOrderNowLoading(true);
    axios
      .post(
        `${serverLink}/order/`,
        {
          product_id: id,
          qty: quantity,
          shipping_add: values.deliveryAddress,
          cart_id: -1,
          phone_number: values.contact,
        },
        {
          headers: {
            Authorization: "bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((res) => {
        setOrderNowLoading(false);
        setOrderNowModal(!orderNowModal);
        toast.dark("Order placed successfully.");
      })
      .catch((err) => {
        setOrderNowLoading(false);
        toast.error("Trouble reaching the servers.");
      });
  };

  return (
    <div
      style={{
        position: "fixed",
        left: "80%",
        backgroundColor: "white",
        height: "87vh",
        padding: "8px",
        width: "20%",
        minWidth: "16vh",
        paddingTop: "5vh",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Quantity"
        disabled={qty === 0}
        variant="outlined"
        type="number"
        defaultValue={1}
        placeholder="Enter quantity"
        inputProps={{ min: 1, max: qty }}
        onChange={(event) => setQuantity(event.target.value)}
        style={{
          margin: "10px",
          width: "88%",
          textAlign: "center",
        }}
      />
      {!loading ? (
        <Button
          outline
          disabled={qty === 0}
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            width: "88%",
            outline: "none",
          }}
          color={qty > 0 ? "info" : "secondary"}
          onClick={() => {
            if (localStorage.getItem("jwt")) {
              addToCart();
            } else {
              history.push("/login");
            }
          }}
        >
          Add to cart
        </Button>
      ) : (
        <div
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            width: "88%",
            textAlign: "center",
          }}
        >
          <Spinner color="info" />
        </div>
      )}
      <Button
        outline
        disabled={qty === 0}
        style={{
          marginLeft: "10px",
          width: "88%",
          outline: "none",
        }}
        color={qty > 0 ? "info" : "secondary"}
        onClick={() => {
          if (localStorage.getItem("jwt")) {
            setOrderNowModal(!orderNowModal);
          } else {
            history.push("/login");
          }
        }}
      >
        Buy now
      </Button>

      <Modal
        isOpen={orderNowModal}
        toggle={() => setOrderNowModal(!orderNowModal)}
      >
        <ModalHeader toggle={() => setOrderNowModal(!orderNowModal)}>
          Order Details
        </ModalHeader>
        <AvForm
          onValidSubmit={orderNow}
          model={{
            deliveryAddress: JSON.parse(localStorage.getItem("user"))
              .customer_detail.loc,
            contact: JSON.parse(localStorage.getItem("user")).customer_detail
              .phone_number,
          }}
        >
          <ModalBody className="py-3 d-flex align-items-center">
            <Row>
              <Col md="12">
                <h5>{name}</h5>
              </Col>
              <Col md="12">
                <p>Quantity: {quantity}</p>
              </Col>
              <Col md="12">
                <p>Amount: {quantity * price}</p>
              </Col>
              <Col md="12">
                <p>Sold by: {sellerName}</p>
              </Col>
              <Col md="12">
                <p>Order by: {JSON.parse(localStorage.getItem("user")).name}</p>
              </Col>
              <Col md="12">
                <AvField
                  name="deliveryAddress"
                  label="Delivery Address"
                  type="text"
                  required
                />
              </Col>
              <Col md="12">
                <AvField
                  name="contact"
                  label="Contact Number"
                  type="number"
                  required
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              outline
              color={orderNowLoading ? "secondary" : "info"}
              disabled={orderNowLoading}
              type="submit"
            >
              Place Order
            </Button>{" "}
            <Button
              outline
              color="secondary"
              onClick={() => setOrderNowModal(!orderNowModal)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    </div>
  );
};

export default RightBox;
