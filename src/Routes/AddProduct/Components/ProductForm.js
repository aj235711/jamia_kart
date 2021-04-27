import * as React from "react";
import { Col, Row } from "reactstrap";
import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";
import { useHistory } from "react-router-dom";
import { Button, FormGroup, Label } from "reactstrap";
import axios from "axios";

const ProductForm = () => {
  const history = useHistory();

//   const handleSubmit = (event, values) => {
//     console.log(values);
//     axios
//       .post("http://localhost:8000/user/", {
//         name: values.name,
//         email: values.email,
//         password: values.password,
//         category: values.userType,
//         location: values.address,
//       })
//       .then((res) => {
//         console.log(res);
//         history.push("/jamia_kart");
//       });
//   };

  return (
    <div
      className="d-flex align-items-center justify-content-center mt-4"
      style={{}}
    >
      <Col md="6" className="border border-secondary rounded p-4 bg-white m-3">
        <AvForm onValidSubmit={(event, values) => console.log(values)}>
          <Row>
            <Col md="6">
              <AvField name="title" label="Title" required />
            </Col>
            <Col md="6">
              <AvField name="quantity"
                label="Quantity"
                type="number"
                required />
            </Col>
            <Col md="6">
              <AvField
                name="price"
                label="Price"
                value="0"
                required
              />
            </Col>
            <Col md="6">
              <AvField
                name="category"
                label="Category"
                required
              />
            </Col>
            <Col md="12">
                <Label>Description</Label>
                <AvInput type="textarea" name="description" placeholder="Description" required className="mb-3" style={{height: '15vh', maxHeight: '15vh'}}/>
            </Col>
            <Col md="12">
              <AvField
                type= "file" id="img" name="img" accept="image/*"
                name="image"
                label="Image" 
                required
              />
              </Col>
            <FormGroup className="w-100 d-flex justify-content-center">
              <Button type="submit" outline color="info">
                Add Product
              </Button>
            </FormGroup>
          </Row>
        </AvForm>
      </Col>
    </div>
  );
};

export default ProductForm;
