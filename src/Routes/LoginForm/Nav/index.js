import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import JamiaKart from "../../../utils/JamiaKart.jpg";
import M from "materialize-css";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="black" className="d-flex justify-content-between flex-wrap"
      >
        <Toolbar className="d-flex justify-content-between flex-wrap">
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={JamiaKart} style={{height:"5vh"}}/>
          </Typography>
          <div onClick={M.toast({html:"Easter egg guiz"})}>Sign Up</div>
          </Toolbar>
          </AppBar>
    </div>
  );
}