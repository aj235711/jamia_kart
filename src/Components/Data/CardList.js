import * as React from "react";
import Card from './Card';
// import product from './Array.js'
import { Col, Row } from 'reactstrap';
import axios from "axios";


const CardList = () => {

    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(response => setProducts(response.data))
    },[])

    return (
        <Row md="12" style={{marginTop:"18vh"}}>

            {products.map((product, i) => {

                return (<Card
                    key={i}
                    id={product.id}
                    price={product.price}
                    name={product.title}
                    imgTag={product.image}
                    category={product.category}
                />
                )
            }
            )}
           
        </Row>
    );
}
export default CardList;