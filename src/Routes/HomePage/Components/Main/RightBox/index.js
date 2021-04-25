import React, { Component, useState } from 'react';
import CardList from './Components/CardList';

const RightBox = () => {
  return (
    <div style={{position: 'relative', left: '21vw'}}>
      <CardList />
    </div>
  )
}

export default RightBox;