import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const RightBox = () => {
  return (
    <div
    style={{
        position: 'fixed', 
        left: '80%',
        backgroundColor: "white",
        height: "80vh",
        padding: "8px",
        width:"20%",
        // display:"flex",
        
        // alignItems:"center",
        // justifyContent:"center"
      }}
    >
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Quantity" variant="outlined"
        style={{margin:"10px"}}
        />
      </form>
      <Button
        variant="outlined"
        style={{ border: "1px solid #ee8822aa", color: "#ee8822ff", marginLeft:"10px" }}
      >
        Add to cart
      </Button>
      <Button
        variant="outlined"
        style={{ border: "1px solid #ee8822aa", color: "#ee8822ff" }}
      >
        Buy now
      </Button>
    </div>
  );
};

export default RightBox;