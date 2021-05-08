import * as React from "react";
import LeftBox from "./LerftBox/index.js";
import RightBox from "./RightBox/index.js";

const Main = ({ searchValue }) => {
  const [stockFilter, setStockFilter] = React.useState(false);
  const [sortFilter, setSortFilter] = React.useState("By Name");
  const [categoryFilter, setCategoryFilter] = React.useState("All");

  return (
    <div style={{ minWidth: "1000px", overflowX: "auto" }}>
      <div className="w-25">
        <LeftBox
          stockFilter={stockFilter}
          setStockFilter={setStockFilter}
          setSortFilter={setSortFilter}
          setCategoryFilter={setCategoryFilter}
        />
      </div>
      <div className="w-75">
        <RightBox
          stockFilter={stockFilter}
          sortFilter={sortFilter}
          categoryFilter={categoryFilter}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
};

export default Main;
