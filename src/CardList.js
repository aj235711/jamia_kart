import React from 'react';
import Card from './Card';
import product from './Array.js'
import { Label } from 'reactstrap';
const CardList = () => {

    return (
        <div className='d-flex  flex-wrap' style={{overflowY:'scroll', border:'1px solid black', height : '600px',margin:'46px'}}>

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