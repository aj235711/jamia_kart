import * as React from "react";
import Details from "./Details";
import { Col, Row } from "reactstrap";
import axios from "axios";

const DetailBox = ({name, price, description}) => {

  // const [products, setProducts] = React.useState([]);
  // React.useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => setProducts(response.data));
  // }, []);

  return (
    <div
    style={{
        position: 'fixed', 
        left: '30%',
        backgroundColor: "white",
        borderRight: "1px solid rgba(0,0,0,0.3)",
        height: "80vh",
        padding: "8px",
        display:"flex",
        width:"50%",
        // alignItems:"center",
        // justifyContent:"center"
      }}
    >
      {/* {products.map((product, i) => {
        return (
          <Col md="3" sm="3">
            <Details
              key={i}
              id={product.id}
              price={product.price}
              name={product.title}
              imgTag={product.image}
              category={product.category}
            />
          </Col>
        );
      })} */}
      <Details name={name} price={price} description={description} />
    </div>
  );
};

export default DetailBox;
