import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import JamiaKart from "../../../utils/JamiaKart.jpg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        color="black"
        className="d-flex justify-content-between flex-wrap border-bottom"
      >
        <Toolbar className="d-flex justify-content-between flex-wrap">
          <Typography className={classes.title} variant="h6" noWrap>
            <img
              src={JamiaKart}
              alt="image"
              style={{ height: "5vh", cursor: "pointer" }}
              onClick={() => history.push("/jamia_kart")}
            />
          </Typography>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/register")}
          >
            Sign Up
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
