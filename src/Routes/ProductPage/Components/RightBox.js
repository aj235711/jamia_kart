import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {serverLink} from '../../../utils/constans';

const RightBox = () => {
  const history = useHistory();
  const [quantity, setQuantity] = React.useState(0);

  // const passQuantity = () => {
  //   console.log(quantity);
  //   history.push('/cart', {quantity})
  // }


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
        inputProps={{ min: 0}}
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
          outline:"none"
        }}
        // onClick={passQuantity}
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
          outline:"none"
        }}
      >
        Buy now
      </Button>
    </div>
  );
};

export default RightBox;
