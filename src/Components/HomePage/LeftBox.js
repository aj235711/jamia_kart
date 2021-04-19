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
import {Col} from 'reactstrap';

const LeftBox = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Col md="12" data-aos="fade-right"
      style={{
        position: "fixed",
        backgroundColor: "white",
        borderRight: "1px solid rgba(0,0,0,0.3)",
        height: "80vh",
        minWidth: "12%",
        width: '20%',
        marginTop: "18vh",
        padding: "8px",
        zIndex: '1000',
        overflowX: 'auto'
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          style={{ margin: "20px" }}
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
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

          <Select>
            <MenuItem value="">
              <em>Featured (default)</em>
            </MenuItem>
            <MenuItem value={10}>Price : Low to High</MenuItem>
            <MenuItem value={20}>Price : High to Low</MenuItem>
            <MenuItem value={30}>Avg. Customer review</MenuItem>
          </Select>
        </FormControl>
        <h2
          style={{ margin: "30px", marginBottom: "0px", textAlign: "center" }}
        >
          Discount
        </h2>
        <div className="d-flex justify-content center flex-wrap">
        <Chip
          label="10% off or more"
          onClick={handleClick}
          onDelete={handleDelete}
          className="d-flex justify-content-between mx-3 my-2"
          style={{ border: "1px solid #ee8022bf", color: "#ee8022ff", backgroundColor: "#ffffff", width: '80%', fontSize: '1.1rem' }}
        />
        <Chip
          label="25% off or more"
          onClick={handleClick}
          onDelete={handleDelete}
          className="d-flex justify-content-between mx-3 my-2"
          style={{ border: "1px solid #ee8022bf", color: "#ee8022ff", backgroundColor: "#ffffff", width: '80%', fontSize: '1.1rem' }}
        />
        <Chip
          label="35% off or more"
          style={{ margin: "50px", marginTop: "4px", marginBottom: "4px", width: '80%' }}
          onClick={handleClick}
          onDelete={handleDelete}
          className="d-flex justify-content-between mx-3 my-2"
          style={{ border: "1px solid #ee8022bf", color: "#ee8022ff", backgroundColor: "#ffffff", width: '80%', fontSize: '1.1rem' }}
        />
        <Chip
          label="50% off or more"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
          className="d-flex justify-content-between mx-3 my-2"
          style={{ border: "1px solid #ee8022bf", color: "#ee8022ff", backgroundColor: "#ffffff", width: '80%', fontSize: '1.1rem' }}
        />
        </div>
      </div>
    </Col>
  );
};

export default LeftBox;
