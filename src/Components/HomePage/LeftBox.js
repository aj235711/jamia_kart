import React from "react";
import { FormControl, FormControlLabel, InputLabel, Chip } from '@material-ui/core';
import Switch from "@material-ui/core/Switch";
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

  const LeftBox = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div
      style={{
        position: "fixed",
        overflowY: "auto",
        backgroundColor: "white",
        borderRight: "1px solid rgba(0,0,0,0.3)",
        // display: "flex",
        // justifyContent: "center",
        height: "80vh",
        width: "20%",
        minWidth: "250px",
        marginTop: "18vh",
        marginRight: "2px",
        padding: "8px"
      }}
    >
      <div style={{display:"flex", flexDirection:"column"}}>
      <FormControlLabel style={{margin:"20px"}}
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="secondary"
            
          />
        }
        label="Available products only"
        />
        <FormControl style={{margin:"20px", marginTop:"30px", marginBottom:"30px"}}>
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
        <h2 style={{margin:"30px", marginBottom:"0px", textAlign:"center"}}>Discount</h2>
        <Chip
          label="10% off or more"
          style={{margin:"50px",marginTop:"4px",marginBottom:"4px"}}
          onClick={handleClick}
          onDelete={handleDelete}
          color="secondary"
        />
        <Chip
          label="25% off or more"
          style={{margin:"50px",marginTop:"4px",marginBottom:"4px"}}
          onClick={handleClick}
          onDelete={handleDelete}
          color="secondary"
        />
        <Chip
          label="35% off or more"
          style={{margin:"50px",marginTop:"4px",marginBottom:"4px"}}
          onClick={handleClick}
          onDelete={handleDelete}
          color="secondary"
        />
        <Chip
          label="50% off or more"
          style={{margin:"50px",marginTop:"4px",marginBottom:"4px"}}
          onClick={handleClick}
          onDelete={handleDelete}
          color="secondary"
        />
        
      </div>
      </div>
  );
};

export default LeftBox;
