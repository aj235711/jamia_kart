import * as React from "react";
import {
  Row,
  Col,
  Button,
  Tooltip,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { serverLink } from "../../../utils/constants";
import axios from "axios";
import { toast } from "react-toastify";
import "./Product.css";
import EditIcon from "@material-ui/icons/Edit";
import { AvForm, AvField } from "availity-reactstrap-validation";

const Product = ({
  id,
  name,
  description,
  quantity,
  image,
  setMyProducts,
  price,
  sellerName,
  category,
  setLoading,
}) => {
  const [editProductLoading, setEditProductLoading] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const [editProductModal, setEditProductModal] = React.useState(false);

  const editProduct = (_, values) => {
    setEditProductLoading(true);
    axios
      .put(
        `${serverLink}/products/edit/${id}`,
        {
          imgurl: image,
          price: values.price,
          qty: values.quantity,
        },
        {
          headers: {
            Authorization: "bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((res) => {
        setEditProductLoading(false);
        setEditProductModal(!editProductModal);
        toast.dark("Successfully Edited");
        setMyProducts([]);
        setLoading(true);
        axios
          .get(`${serverLink}/products/saare/mere/`, {
            headers: {
              Authorization: "bearer " + localStorage.getItem("jwt"),
            },
          })
          .then((res) => {
            console.log(res);
            setMyProducts([...res.data]);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            toast.error("Trouble reaching the servers");
          });
      })
      .catch((err) => {
        setEditProductLoading(false);
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
            <Col className="imgSeller">
              <img
                className="imageSeller"
                src={image}
                alt="image"
                height="180vh"
              />
            </Col>
          </Col>
          <Col md="9" className="d-flex flex-wrap mt-3">
            <h3>{name}</h3>
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
          <h6 className="mr-5">Price: {price}</h6>
          <div className="d-flex justify-content-around align-items-center">
            <EditIcon
              onClick={() => setEditProductModal(!editProductModal)}
              style={{ color: "#ffbb39", cursor: "pointer", outline: "none" }}
              outline
              className="mr-3"
              id="editIcon"
            />
          </div>
        </Row>
      </div>
      <Modal
        isOpen={editProductModal}
        toggle={() => setEditProductModal(!editProductModal)}
      >
        <ModalHeader toggle={() => setEditProductModal(!editProductModal)}>
          Edit Product Details
        </ModalHeader>
        <AvForm
          onValidSubmit={editProduct}
          model={{
            quantity,
            price,
          }}
        >
          <ModalBody className="py-5 d-flex align-items-center">
            <Row>
              <Col md="6">
                <AvField
                  name="quantity"
                  label="Quantity"
                  type="number"
                  required
                />
              </Col>
              <Col md="6">
                <AvField name="price" label="Price" required />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              outline
              color="info"
              className="mr-2"
              disabled={editProductLoading}
            >
              Save Changes
            </Button>
            <Button
              outline
              color="secondary"
              onClick={() => setEditProductModal(!editProductModal)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>

      <Tooltip
        placement="bottom"
        isOpen={tooltipOpen}
        target="editIcon"
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        Edit Product
      </Tooltip>
    </div>
  );
};

export default Product;
