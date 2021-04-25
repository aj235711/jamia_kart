import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const RightBox = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "80%",
        backgroundColor: "white",
        height: "80vh",
        padding: "8px",
        width: "20%",
        minWidth: "16vh",
        // display:"flex",

        // alignItems:"center",
        // justifyContent:"center"
      }}
    >
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          placeholder="pikaboo"
          style={{
            margin: "10px",
            width: '88%',
            textAlign:'center'
          }}
        />
      </form>
      <Button
        variant="outlined"
        style={{
          border: "1px solid #ee8822aa",
          color: "#ee8822ff",
          marginLeft: "10px",
          // marginBottom:"2px",
          width: "88%",
        }}
      >
        Add to cart
      </Button>
      <Button
        variant="outlined"
        style={{
          border: "1px solid #ee8822aa",
          color: "#ee8822ff",
          marginLeft: "10px",
          width:'88%'
        }}
      >
        Buy now
      </Button>
    </div>
  );
};

export default RightBox;
