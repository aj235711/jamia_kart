/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import {
  Row,
  Col,
  Button,
  Tooltip,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { serverLink } from "../../../utils/constants";
import axios from "axios";
import { toast } from "react-toastify";
import "./CartItem.css";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const CartItem = ({
  id,
  name,
  description,
  quantity,
  image,
  setCartItems,
  productId,
  price,
  productQty,
  sellerName,
  category,
  setLoading,
}) => {
  const history = useHistory();

  console.log(productId);

  const [currentQuantity, setCurrentQuantity] = React.useState(quantity);
  const [saveChangesLoading, setSaveChangesLoading] = React.useState(false);
  const [deleteItemLoading, setDeleteItemLoading] = React.useState(false);
  const [orderNowLoading, setOrderNowLoading] = React.useState(false);
  const [editTooltipOpen, setEditTooltipOpen] = React.useState(false);
  const [deleteTooltipOpen, setDeleteTooltipOpen] = React.useState(false);
  const [orderNowModal, setOrderNowModal] = React.useState(false);
  const [deleteItemModal, setDeleteItemModal] = React.useState(false);

  const saveChanges = () => {
    setSaveChangesLoading(true);
    axios
      .put(
        `${serverLink}/cart/update/${+id}?qty=${+currentQuantity}`,
        {},
        {
          headers: {
            Authorization: "bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((res) => {
        toast.dark("Successfully Updated");
        setLoading(true);
        setCartItems([]);
        axios
          .get(`${serverLink}/cart/`, {
            headers: {
              Authorization: "bearer " + localStorage.getItem("jwt"),
            },
          })
          .then((res) => {
            console.log(res);
            setCartItems([...res.data]);
            setSaveChangesLoading(false);
            setLoading(false);
          })
          .catch((err) => {
            setSaveChangesLoading(false);
            setLoading(false);
            toast.error("Trouble reaching the servers");
          });
      })
      .catch((err) => {
        setSaveChangesLoading(false);
        toast.error("Trouble reaching the servers");
      });
  };

  const deleteItem = () => {
    setDeleteItemLoading(true);
    axios
      .delete(`${serverLink}/cart/delete/${+id}`, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((res) => {
        setDeleteItemModal(!deleteItemModal);
        toast.dark("Successfully Deleted");
        setCartItems([]);
        setLoading(true);
        axios
          .get(`${serverLink}/cart/`, {
            headers: {
              Authorization: "bearer " + localStorage.getItem("jwt"),
            },
          })
          .then((res) => {
            console.log(res);
            setCartItems([...res.data]);
            setDeleteItemLoading(false);
            setLoading(false);
          })
          .catch((err) => {
            setDeleteItemLoading(false);
            setLoading(false);
            toast.error("Trouble reaching the servers");
          });
      })
      .catch((err) => {
        setDeleteItemLoading(false);
        toast.error("Trouble reaching the servers");
      });
  };

  const orderNow = (event, values) => {
    setOrderNowLoading(true);
    axios
      .post(
        `${serverLink}/order/`,
        {
          product_id: productId,
          qty: currentQuantity,
          shipping_add: values.deliveryAddress,
          cart_id: id,
          phone_number: values.contact,
        },
        {
          headers: {
            Authorization: "bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((res) => {
        setOrderNowModal(!orderNowModal);
        toast.success("Order placed successfully.");
        setCartItems([]);
        setLoading(true);
        axios
          .get(`${serverLink}/cart/`, {
            headers: {
              Authorization: "bearer " + localStorage.getItem("jwt"),
            },
          })
          .then((res) => {
            console.log(res);
            setCartItems([...res.data]);
            setOrderNowLoading(false);
            setLoading(false);
          })
          .catch((err) => {
            setOrderNowLoading(false);
            setLoading(false);
            toast.error("Trouble reaching the servers.");
          });
      })
      .catch((err) => {
        setOrderNowLoading(false);
        toast.error("Trouble reaching the servers.");
      });
    console.log(values);
  };

  return (
    <div className="mb-2" data-aos="zoom-in-left">
      <div
        className="shadow p-3 mt-4"
        style={{ borderRadius: "5px", border: "2px solid rgba(0, 0, 0, 0.3)" }}
      >
        <Row
          style={{
            width: "100%",
          }}
        >
          <Col
            md="3"
            className="h-100 d-flex justify-content-center align-items-center pt-3 pb-3"
          >
            <Col className="imgContainerCart">
              <img className="imageCart" src={image} height="180vh" />
            </Col>
          </Col>
          <Col md="9" className="d-flex flex-wrap mt-3">
            <h3
              style={{ cursor: "pointer" }}
              onClick={() =>
                history.push(`/product${productId}`, {
                  id: productId,
                  name,
                  price,
                  imgTag: image,
                  category,
                  description,
                  sellerName,
                  qty: productQty,
                })
              }
            >
              {name}
            </h3>
            <p>{description}</p>
          </Col>
        </Row>

        <Row
          className="d-flex justify-content-between align-items-center border-top"
          style={{
            height: "10vh",
            width: "100%",
          }}
        >
          <h6 className="ml-5">
            <RemoveIcon
              className="bg-dark text-white mr-2 p-1"
              style={{ cursor: "pointer" }}
              onClick={() =>
                setCurrentQuantity(
                  currentQuantity > 1 ? currentQuantity - 1 : 1
                )
              }
            />
            {"      "}Quantity: {currentQuantity}
            {"      "}
            <AddIcon
              className="bg-dark text-white ml-2 p-1"
              style={{ cursor: "pointer" }}
              onClick={() => setCurrentQuantity(currentQuantity + 1)}
            />
            {"      "}
          </h6>
          <h6>Total amount: {currentQuantity * price}</h6>
          <div className="d-flex justify-content-around align-items-center">
            {currentQuantity !== quantity && (
              <EditIcon
                id="editIcon"
                style={{
                  color: saveChangesLoading ? "#00000045" : "#ffbb39",
                  cursor: "pointer",
                  outline: "none",
                }}
                outline
                className="mr-3"
                onClick={saveChanges}
                disabled={saveChangesLoading}
              />
            )}
            <DeleteIcon
              id="deleteIcon"
              onClick={() => setDeleteItemModal(!deleteItemModal)}
              style={{ color: "#ed4444", cursor: "pointer", outline: "none" }}
              outline
              className="mr-3"
            />
            <Button
              onClick={() => setOrderNowModal(!orderNowModal)}
              color={
                orderNowLoading || currentQuantity !== quantity
                  ? "secondary"
                  : "info"
              }
              disabled={orderNowLoading || currentQuantity !== quantity}
              outline
              className="mr-3"
            >
              Order Now
            </Button>
          </div>
        </Row>
      </div>

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
                <p>Quantity: {currentQuantity}</p>
              </Col>
              <Col md="12">
                <p>Amount: {currentQuantity * price}</p>
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

      <Modal
        isOpen={deleteItemModal}
        toggle={() => setDeleteItemModal(!deleteItemModal)}
      >
        <ModalBody className="py-5 d-flex align-items-center">
          Are you sure you want to delete this item from the cart?
        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color={deleteItemLoading ? "secondary" : "danger"}
            disabled={deleteItemLoading}
            onClick={deleteItem}
          >
            Yes, Delete
          </Button>{" "}
          <Button
            outline
            color="secondary"
            onClick={() => setDeleteItemModal(!deleteItemModal)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {currentQuantity !== quantity && (
        <Tooltip
          placement="bottom"
          isOpen={editTooltipOpen}
          target="editIcon"
          toggle={() => setEditTooltipOpen(!editTooltipOpen)}
        >
          Save Changes
        </Tooltip>
      )}
      <Tooltip
        placement="bottom"
        isOpen={deleteTooltipOpen}
        target="deleteIcon"
        toggle={() => setDeleteTooltipOpen(!deleteTooltipOpen)}
      >
        Delete from cart
      </Tooltip>
    </div>
  );
};

export default CartItem;
