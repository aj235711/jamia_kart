import * as React from "react";
import { Container, Col, Row } from "reactstrap";
import LeftBox from './LerftBox/index.js';
import RightBox from "./RightBox/index.js";

const Main = ({selectedCategory}) => {

    const [stockFilter, setStockFilter] = React.useState(false);
    const [sortFilter, setSortFilter] = React.useState('Alphabetically');

    console.log(stockFilter);

    return (
        <div style={{minWidth: '1000px', overflowX: 'auto'}}>
            <div className="w-25">
                <LeftBox stockFilter={stockFilter} setStockFilter={setStockFilter} sortFilter={sortFilter} setSortFilter={setSortFilter} />
            </div>
            <div className='w-75'>
                <RightBox selectedCategory={selectedCategory} stockFilter={stockFilter} sortFilter={sortFilter} />
            </div>
        </div>
    )
}

export default Main