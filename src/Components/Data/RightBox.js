import React, { Component, useState } from 'react';
import CardList from './CardList';
// import Scroll from './Scroll';
// import SearchBox from './SearchBox';
// import product from './Components/Data/Array';


const RightBox = () => {
  return (
    <div style={{position: 'relative', left: '21vw'}}>
      <CardList />,
    </div>
  )
}

export default RightBox;