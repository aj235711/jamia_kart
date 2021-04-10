import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const LeftBox = () => {
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
      <FormControlLabel
        control={<Switch name="checkedB" color="primary" />}
        label=" Available products only"
          />
    </div>
  );
};

export default LeftBox;
