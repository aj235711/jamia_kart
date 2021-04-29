import * as React from "react";
import {Button, Spinner} from "reactstrap";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {serverLink} from '../../../utils/constants';

const RightBox = ({ qty }) => {
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
        disabled={qty===0}
        variant="outlined"
        type="number"
        defaultValue={1}
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
        outline
        disabled={qty===0}
        style={{
          // border: `1px solid ${qty>0 ? "#ee8822aa" : "#44444466"}`,
          // color: `${qty>0 ? "#ee8822aa" : "#44444466"}`,
          marginLeft: "10px",
          marginBottom: "10px",
          width: "88%",
          outline:"none"
        }}
        color={qty>0 ? 'info' : 'secondary'}
        onClick={() => {
          if(localStorage.getItem('jwt')) {

          } else {
            history.push('/login');
          }
        }}
      >
        Add to cart
      </Button>
      {/* <div style={{marginLeft: "10px",
          marginBottom: "10px",
          width: "88%",
          textAlign: "center"}}><Spinner /></div> */}
      <Button
        outline
        disabled={qty===0}
        style={{
          // border: `1px solid ${qty>0 ? "#ee8822aa" : "#44444466"}`,
          // color: `${qty>0 ? "#ee8822aa" : "#44444466"}`,
          marginLeft: "10px",
          width: "88%",
          outline:"none"
        }}
        color={qty>0 ? 'info' : 'secondary'}
        onClick={() => {
          if(localStorage.getItem('jwt')) {

          } else {
            history.push('/login');
          }
        }}
      >
        Buy now
      </Button>
    </div>
  );
};

export default RightBox;
