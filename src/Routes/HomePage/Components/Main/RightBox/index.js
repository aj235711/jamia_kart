import * as React from "react";
import CardList from "./Components/CardList";

const RightBox = ({
  selectedCategory,
  stockFilter,
  sortFilter,
  categoryFilter,
  searchValue,
}) => {
  return (
    <div style={{ position: "relative", left: "21vw" }}>
      <CardList
        selectedCategory={selectedCategory}
        stockFilter={stockFilter}
        sortFilter={sortFilter}
        categoryFilter={categoryFilter}
        searchValue={searchValue}
      />
    </div>
  );
};

export default RightBox;
