import React, { Component, useState } from 'react';
import SearchBox from './SearchBox';
import './HomePage.css';
import CardList from './CardList';
import Scroll from './Scroll';
import product from './Array';
const HomePage = () => {
    return <div>
        {/* <CardList /> */}
        <div>
           {/* <Scroll> */}
              <CardList  />,
            {/* </Scroll> */}
          </div>
    </div>
}

export default HomePage;