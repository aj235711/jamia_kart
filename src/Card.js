import React from 'react';
import { Container } from 'reactstrap';




const Card = ({ id,name,price,imgTag}) => {
    return (


        <div className  ='bg-light rounded p-3 m-2 d-flex flex-wrap 'style={{alignItems:'center',textAlign:'centerssssss'}}>
        <div className='d-flex justify-content-center' style={{width:'100%'}}>
          <img alt='robots' src={imgTag} width='100vw' height='auto'/>
         </div>

            <div >
            {/* <h2>{id}</h2> */}
            <h6>{name}</h6>
            <p>{price}</p>
            
         </div>
        </div>

    );
}
export default Card;