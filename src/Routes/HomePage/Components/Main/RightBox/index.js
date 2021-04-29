import React, { Component, useState } from "react";
import CardList from "./Components/CardList";

const RightBox = ({
  selectedCategory,
  stockFilter,
  sortFilter
}) => {

  return (
    <div style={{ position: "relative", left: "21vw" }}>
      <CardList
        selectedCategory={selectedCategory}
        stockFilter={stockFilter}
        sortFilter={sortFilter}
      />
    </div>
  );
};

export default RightBox;
