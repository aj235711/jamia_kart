import React from "react";
import './Card.css';
import Button from '@material-ui/core/Button';


const Card = ({ id, name, price, imgTag, category }) => {
    return (
        <div className="Container">
            <div >
                <img alt="robots" src={imgTag} className="Image"/>
            </div>
            <div className="Cont2">
            <div className="Name">
                {/* <h2>{id}</h2> */}
                <h5>{name.length < 25 ? name : name.substring(0, 25)+'...'}</h5>
            </div>
            <div className="Category">
                <h6>{category}</h6>
            </div>
            <div className="Price">
                <p>${price}</p>
                </div>
            </div>
            <Button variant="contained" style={{backgroundColor:"#F98B88"}}
                // color="secondary"
            >
            Show product
            </Button>
        </div>
    );
};
export default Card;
