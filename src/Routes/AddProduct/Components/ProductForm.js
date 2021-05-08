import * as React from "react";
import { Col, Row } from "reactstrap";
import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";
import { Button, FormGroup, Label, Spinner } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";

import { serverLink } from "../../../utils/constants";

const ProductForm = () => {
  const [image, setImage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (event, values) => {
    setLoading(true);
    console.log(values);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "tanmay-vig");
    axios
      .post("https://api.cloudinary.com/v1_1/tanmay-vig/image/upload", data)
      .then((res) => {
        console.log(res);
        axios
          .post(
            `${serverLink}/products/`,
            {
              name: values.title,
              imgurl: res.data.url,
              price: values.price,
              qty: values.quantity,
              category: values.category,
              desc: values.description,
            },
            {
              headers: {
                Authorization: "bearer " + localStorage.getItem("jwt"),
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            setLoading(false);
            toast.dark("Added successfully!!");
          })
          .catch((err) => {
            setLoading(false);
            toast.error("An error occured");
          });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("An error occured");
      });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center mt-4"
      style={{}}
    >
      <Col md="6" className="border border-secondary rounded p-4 bg-white m-3">
        <AvForm onValidSubmit={handleSubmit}>
          <Row>
            <Col md="6">
              <AvField name="title" label="Title" required />
            </Col>
            <Col md="6">
              <AvField
                name="quantity"
                label="Quantity"
                type="number"
                required
              />
            </Col>
            <Col md="6">
              <AvField name="price" label="Price" value="0" required />
            </Col>
            <Col md="6">
              <AvField name="category" label="Category" required />
            </Col>
            <Col md="12">
              <Label>Description</Label>
              <AvInput
                type="textarea"
                name="description"
                placeholder="Description"
                required
                className="mb-3"
                style={{ height: "15vh", maxHeight: "15vh" }}
              />
            </Col>
            <Col md="12">
              <AvField
                type="file"
                id="img"
                name="img"
                accept="image/*"
                name="image"
                label="Image"
                required
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Col>
            <FormGroup className="w-100 d-flex justify-content-center">
              {!loading ? (
                <Button type="submit" outline color="info">
                  Add Product
                </Button>
              ) : (
                <Spinner color="info" />
              )}
            </FormGroup>
          </Row>
        </AvForm>
      </Col>
    </div>
  );
};

export default ProductForm;
