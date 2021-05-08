import * as React from "react";
import Card from "./Card";
import { Col, Row } from "reactstrap";
import axios from "axios";
import { serverLink } from "../../../../../../utils/constants";
import PlaceHolder from "../../../../../../Components/PlaceHolder";

const CardList = ({ searchValue, stockFilter, sortFilter, categoryFilter }) => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverLink}/products/saare`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const searchedProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.category.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredProducts =
    categoryFilter === "All"
      ? searchedProducts
      : searchedProducts.filter(
          (product) => product.category === categoryFilter
        );

  const stockFilterProducts = stockFilter
    ? filteredProducts.filter((product) => product.qty > 0)
    : filteredProducts;

  const productsToShow =
    sortFilter === "By Name"
      ? stockFilterProducts.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        )
      : sortFilter === "PLTH"
      ? stockFilterProducts.sort((a, b) =>
          a.price > b.price ? 1 : a.price < b.price ? -1 : 0
        )
      : sortFilter === "PHTL"
      ? stockFilterProducts.sort((a, b) =>
          a.price < b.price ? 1 : a.price > b.price ? -1 : 0
        )
      : sortFilter === "By Category"
      ? stockFilterProducts.sort((a, b) =>
          a.category > b.category ? 1 : a.category < b.category ? -1 : 0
        )
      : stockFilterProducts;

  if (loading) return <PlaceHolder />;

  return (
    <Row
      data-aos="zoom-in-left"
      style={{ marginTop: "12vh", paddingBottom: "30px" }}
      className="display-flex justify-content-center"
    >
      {productsToShow.length ? (
        productsToShow.map((product, i) => {
          return (
            <Col md="3" sm="3">
              <Card
                key={product.id}
                id={product.id}
                price={product.price}
                name={product.name}
                imgTag={product.imgurl}
                category={product.category}
                description={product.desc}
                sellerName={product.seller.name}
                qty={product.qty}
              />
            </Col>
          );
        })
      ) : (
        <Col
          md="12"
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          Oooops, nothing to show...😓
        </Col>
      )}
    </Row>
  );
};
export default CardList;
