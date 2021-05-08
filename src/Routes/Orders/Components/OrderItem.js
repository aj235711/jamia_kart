import * as React from "react";
import {
  Row,
  Col,
  Button,
  Spinner,
  Tooltip,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { serverLink } from "../../../utils/constants";
import axios from "axios";
import { toast } from "react-toastify";
import "./OrderItem.css";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

const CartItem = ({
  id,
  name,
  description,
  quantity,
  image,
  setOrderItems,
  productId,
  price,
  productQty,
  sellerName,
  category,
  setLoading,
  amount,
  status,
  phoneNumber,
  shipAddress,
}) => {
  const history = useHistory();

  const [deleteItemLoading, setDeleteItemLoading] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const [deleteItemModal, setDeleteItemModal] = React.useState(false);
  const [viewDetailsModal, setViewDetailsModal] = React.useState(false);

  const deleteItem = () => {
    setDeleteItemLoading(true);
    axios
      .delete(`${serverLink}/order/delete/${+id}`, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((res) => {
        setDeleteItemModal(!deleteItemModal);
        toast.dark("Successfully Deleted");
        setOrderItems([]);
        setLoading(true);
        axios
          .get(`${serverLink}/order/`, {
            headers: {
              Authorization: "bearer " + localStorage.getItem("jwt"),
            },
          })
          .then((res) => {
            console.log(res);
            setOrderItems([...res.data]);
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
            <div className="ml-5">Quantity: {quantity}</div>
          </h6>
          <h6 className="mr-5">Order Total: {amount}</h6>
          <div className="d-flex justify-content-around align-items-center">
            <DeleteIcon
              onClick={() => setDeleteItemModal(!deleteItemModal)}
              style={{ color: "#ed4444", cursor: "pointer", outline: "none" }}
              outline
              className="mr-3"
              id="deleteIcon"
            />
            <Button
              color="info"
              outline
              className="mr-3"
              onClick={() => setViewDetailsModal(!viewDetailsModal)}
            >
              View Details
            </Button>
          </div>
        </Row>
      </div>

      <Modal
        isOpen={deleteItemModal}
        toggle={() => setDeleteItemModal(!deleteItemModal)}
      >
        <ModalBody className="py-5 d-flex align-items-center">
          Are you sure you want to delete this order?
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

      <Modal
        isOpen={viewDetailsModal}
        toggle={() => setViewDetailsModal(!viewDetailsModal)}
      >
        <ModalBody className="py-3 d-flex align-items-center">
          <Row>
            <Col md="12">
              <h6>{name}</h6>
            </Col>
            <Col md="12">
              <small>Quantity: {quantity}</small>
            </Col>
            <Col md="12">
              <small>Amount: {amount}</small>
            </Col>
            <Col md="12">
              <small>Sold by: {sellerName}</small>
            </Col>
            <Col md="12">
              <small>
                Ordered By: {JSON.parse(localStorage.getItem("user")).name}
              </small>
            </Col>
            <Col md="12">
              <small>Phone Number: {phoneNumber}</small>
            </Col>
            <Col md="12">
              <small>Delivery Address: {shipAddress}</small>
            </Col>
            <Col md="12">
              <small>Delivery Status: {!status && "On its way..."}</small>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color="secondary"
            onClick={() => setViewDetailsModal(!viewDetailsModal)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Tooltip
        placement="bottom"
        isOpen={tooltipOpen}
        target="deleteIcon"
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        Delete Order
      </Tooltip>
    </div>
  );
};

export default CartItem;
