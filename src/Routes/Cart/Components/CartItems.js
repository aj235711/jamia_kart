/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { Row, Col, Button, Spinner, Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { serverLink } from "../../../utils/constants";
import axios from "axios";
import { toast } from "react-toastify";
import "./CartItem.css";
import { useHistory } from 'react-router-dom';

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
}) => {

  const history = useHistory();

  const [currentQuantity, setCurrentQuantity] = React.useState(quantity);
  const [saveChangesLoading, setSaveChangesLoading] = React.useState(false);
  const [deleteItemLoading, setDeleteItemLoading] = React.useState(false);

  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

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
          })
          .catch((err) => {
            setSaveChangesLoading(false);
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
        toggle();
        toast.dark("Successfully Deleted");
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
            setDeleteItemLoading(false);
          })
          .catch((err) => {
            setDeleteItemLoading(false);
            toast.error("Trouble reaching the servers");
          });
      })
      .catch((err) => {
        setDeleteItemLoading(false);
        toast.error("Trouble reaching the servers");
      });
  };

  return (
    <div className="mb-2">
      <div
        className="shadow p-3 mt-5"
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
            <h3 style={{ cursor: "pointer" }} 
            onClick={() => history.push(`/product${productId}`, {id: productId, name, price, imgTag: image, category, description, sellerName, qty: productQty})}
            >{name}</h3>
            <p>{description}</p>
          </Col>
        </Row>

        <Row
          className="d-flex justify-content-between align-items-center"
          style={{
            height: "10vh",
            width: "100%",
          }}
        >
          <h5 className="ml-5">
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
          </h5>
          <div className="d-flex justify-content-around">
            {currentQuantity !== quantity && (
              <Button
                color={saveChangesLoading ? "secondary" : "success"}
                outline
                className="mr-3"
                onClick={saveChanges}
                disabled={saveChangesLoading}
              >
                Save Changes
              </Button>
            )}
            <Button
              onClick={toggle}
              color='danger'
              outline
              className="mr-3"
            >
              Delete Item
            </Button>
            <Button color="info" outline className="mr-3">
              Order Now
            </Button>
          </div>
        </Row>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody className="py-5 d-flex align-items-center">
          Are you sure you want to delete this item?
        </ModalBody>
        <ModalFooter>
          <Button color={deleteItemLoading ? "secondary" : "danger"} disabled={deleteItemLoading} onClick={deleteItem}>Yes, Delete</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CartItem;
