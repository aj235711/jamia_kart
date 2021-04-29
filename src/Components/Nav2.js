import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div data-aos="fade-down" className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#222222", fontFamily: "Lora", marginBottom:"10px"}}
      >
        <Toolbar variant="dense">
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
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
            </ListItem>
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
