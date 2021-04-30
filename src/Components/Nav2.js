import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import SearchForeverTwoToneIcon from '@material-ui/icons/Search';

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
        }}
      >
        <Toolbar
          variant="dense"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#222222",
            alignItems: "center",
            textAlign:"center",
          }}
        >
          <div style={{
              textAlign: "center",
              borderRadius:"10px",
              backgroundColor: "rgba(400,400,400,1)",
              margin: "2px",
              width: "60%",
            zIndex: "6000",
              border:"4px solid rgb(300, 120, 20)"
          }}>
            <SearchForeverTwoToneIcon
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(400,400,400,1)",
            }}
            />
          <TextField
            id="filled-search"
            label="Search products"
            type="search"
            placeholder="Search by Label"
            variant="standard"
            // multiline
              onChange={searchInput}
              style={{
                margin: "4px",
                width: "80%",
              }}
            />
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
