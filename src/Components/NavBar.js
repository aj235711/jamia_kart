/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import JamiaKart from "../utils/JamiaKart.jpg";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ zIndex: "5000" }}
    >
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
      <MenuItem
        onClick={() => {
          localStorage.setItem("jwt", "");
          handleMenuClose();
          history.push("./login");
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const history = useHistory();

  const searchInput = (event) => {

      // *LABEL WALA TARIKA

    history.push("/jamia_kart", { searchValue: event.target.value });

  };

  return (
    <div data-aos="fade-down">
      <AppBar position="static" color="black">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <img
              src={JamiaKart}
              style={{ height: "5vh", cursor: "pointer" }}
              onClick={() => history.push("/jamia_kart")}
            />
          </Typography>

          <TextField
            id="filled-search"
            label="Search products"
            type="search"
            placeholder="Search by Category"
            variant="filled"
            // multiline
            onChange={searchInput}
            style={{
              marginLeft: "2vh",
              color: "",
              margin: "1vh",
              width: "20%",
            }}
          />

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={(event) => {
                if (localStorage.getItem("jwt")) handleProfileMenuOpen(event);
                else history.push("./login");
              }}
              color="inherit"
              style={{ outline: "none" }}
            >
              {localStorage.getItem("jwt") ? (
                <Button color="transparent">User</Button>
              ) : (
                <Button color="transparent">Login</Button>
              )}
            </IconButton>
            <IconButton
              onClick={() => history.push("/cart")}
              aria-label="show 4 new"
              color="inherit"
              style={{ outline: "none" }}
            >
              <Badge badgeContent={0} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
