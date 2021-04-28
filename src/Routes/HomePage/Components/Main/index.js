import * as React from "react";
import { Container, Col, Row } from "reactstrap";
import LeftBox from './LerftBox/index.js';
import RightBox from "./RightBox/index.js";

const Main = ({selectedCategory}) => {

    const [stockFilter, setStockFilter] = React.useState(false);

    console.log(stockFilter);

    return (
        <div style={{minWidth: '1000px', overflowX: 'auto'}}>
            <div className="w-25">
                <LeftBox stockFilter={stockFilter} setStockFilter={setStockFilter}/>
            </div>
            <div className='w-75'>
                <RightBox selectedCategory={selectedCategory} stockFilter={stockFilter} />
            </div>
        </div>
    )
}

export default Main