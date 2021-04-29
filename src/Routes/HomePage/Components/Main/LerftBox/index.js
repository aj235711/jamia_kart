import React from "react";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  Chip,
} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { Col } from "reactstrap";

const LeftBox = ({
  stockFilter,
  setStockFilter,
  sortFilter,
  setSortFilter,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "white",
        height: "100vh",
        width: "20vw",
        minWidth: "180px",
        marginTop: "14vh",
        paddingTop: "30px",
        paddingBottom: "50px",
        zIndex: "500",
        overflowX: "auto",
        BorderRadius: "20px",
      }}
    >
      <Col
        md="12"
        data-aos="fade-right"
        style={{
          position: "fixed",
          backgroundColor: "white",
          borderRight: "1px solid rgba(0,0,0,0.3)",
          height: "80vh",
          width: "20vw",
          minWidth: "180px",
          padding: "8px",
          zIndex: "1000",
          overflowX: "auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            style={{ margin: "20px" }}
            control={
              <Switch
                checked={stockFilter}
                onChange={() => setStockFilter(!stockFilter)}
                name="checkedB"
                style={{ color: "black" }}
                color="#000000"
              />
            }
            label="Available products only"
          />
          <FormControl
            style={{ margin: "20px", marginTop: "30px", marginBottom: "30px" }}
          >
            <InputLabel>Sort by</InputLabel>

            <Select
              onChange={(event) => setSortFilter(event.target.value)}
            >
              <MenuItem value={"By Name"}>By Name</MenuItem>
              <MenuItem value={"PLTH"}>Price : Low to High</MenuItem>
              <MenuItem value={"PHTL"}>Price : High to Low</MenuItem>
              <MenuItem value={"By Category"}>By Category</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Col>
    </div>
  );
};

export default LeftBox;
