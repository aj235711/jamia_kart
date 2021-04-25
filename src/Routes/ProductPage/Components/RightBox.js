import * as React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const RightBox = () => {
  
  const [quantity, setQuantity] = React.useState(0);


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
      }}
    >
      <TextField
        id="outlined-basic"
        label="Quantity"
        variant="outlined"
        type="number"
        inputProps={{min: 0}}
        placeholder="Enter quantity"
        inputProps={{min: 1}}
        onChange={(event) => setQuantity(event.target.value)}
        style={{
          margin: "10px",
          width: "88%",
          textAlign: "center",
        }}
      />
      <Button
        variant="outlined"
        style={{
          border: "1px solid #ee8822aa",
          color: "#ee8822ff",
          marginLeft: "10px",
          marginBottom: "10px",
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
          width: "88%",
        }}
      >
        Buy now
      </Button>
    </div>
  );
};

export default RightBox;
