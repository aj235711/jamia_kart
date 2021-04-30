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
        {/* <Toolbar variant="dense">
          <ListItem button style={{textAlign:"center" }} onClick={() => history.push('/jamia_kart', {selectedCategory: 'All'})}>
            <ListItemText primary="All" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Men's section" onClick={() => history.push('/jamia_kart', {selectedCategory: `Men's Clothing`})}/>
            </ListItem>
          <ListItem button>
            <ListItemText primary="Women's section" onClick={() => history.push('/jamia_kart', {selectedCategory: `Women's Clothing`})}/>
            </ListItem>
          <ListItem button>
            <ListItemText primary="Jewelery" onClick={() => history.push('/jamia_kart', {selectedCategory: 'Jewelery'})}/>
            </ListItem>
          <ListItem button>
            <ListItemText primary="Electronics" onClick={() => history.push('/jamia_kart', {selectedCategory: 'Electronics'})}/>
            </ListItem> */}
          {/* <ListItem button>
            <ListItemText primary="Top purchases" />
            </ListItem>
          <ListItem button>
            <ListItemText primary="Computers" />
          </ListItem> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
