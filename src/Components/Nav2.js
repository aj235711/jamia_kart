import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { useHistory } from "react-router-dom";

export default function DenseAppBar() {
  const history = useHistory();

  const searchInput = (event) => {
    // *LABEL WALA TARIKA

    history.push("/jamia_kart", { searchValue: event.target.value });
  };

  return (
    <div data-aos="fade-down">
      <AppBar
        position="static"
        style={{
          fontFamily: "Lora",
          height:"1px"
        }}
      >
        <Toolbar
          variant="dense"
          style={{
            display: "flex",
            height: "3px",
            justifyContent: "center",
            backgroundColor: "#222222",
            alignItems: "center",
            textAlign:"center",
          }}
        >
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
