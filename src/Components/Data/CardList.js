import React from 'react';
import Card from './Card';
import product from './Array.js'
import { Label } from 'reactstrap';
const CardList = () => {

    return (
        <div className='d-flex  flex-wrap' style={{ marginTop:"18vh"}}>

            {product.map((p, i) => {

                return (<Card
                    key={i}
                    id={p.id}
                    price={p.price}
                    name={p.name}
                    imgTag={p.imgTag}
                />
                )
            }
            )}
           
        </div>
    );
}
export default CardList;