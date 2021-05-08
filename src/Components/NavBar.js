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
import SearchForeverTwoToneIcon from "@material-ui/icons/Search";

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
      {localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user")).category === "customer" ? (
        <>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              history.push("/myprofile");
            }}
          >
            My Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              history.push("/orders");
            }}
          >
            My Orders
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.setItem("jwt", "");
              localStorage.setItem("user", undefined);
              handleMenuClose();
              history.push("/login");
            }}
          >
            Logout
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              history.push("/myprofile");
            }}
          >
            My Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              history.push("/myproducts");
            }}
          >
            My Products
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.setItem("jwt", "");
              handleMenuClose();
              history.push("/login");
            }}
          >
            Logout
          </MenuItem>
        </>
      )}
    </Menu>
  );

  const history = useHistory();

  const searchInput = (event) => {
    history.push("/jamia_kart", { searchValue: event.target.value });
  };

  return (
    <div data-aos="fade-down">
      <AppBar
        position="static"
        color="black"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.3" }}
      >
        <Toolbar className="d-flex justify-content-between">
          <Typography className={classes.title} variant="h6" noWrap>
            <img
              src={JamiaKart}
              style={{ height: "5vh", cursor: "pointer" }}
              onClick={() =>
                history.push(
                  JSON.parse(localStorage.getItem("user")).category === "seller"
                    ? "/sellerhomepage"
                    : "/jamia_kart"
                )
              }
            />
          </Typography>
          {localStorage.getItem("user") &&
            JSON.parse(localStorage.getItem("user")).category ===
              "customer" && (
              <div
                style={{
                  textAlign: "center",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  margin: "2px",
                  marginLeft: "90vh",
                  width: "30%",
                  zIndex: "6000",
                }}
              >
                <SearchForeverTwoToneIcon
                  style={{
                    marginTop: "20px",
                    marginRight: "5px",
                    marginLeft: "5px",
                    backgroundColor: "white",
                  }}
                />
                <TextField
                  id="filled-search"
                  label="Search products"
                  type="search"
                  placeholder="Search by Label"
                  variant="standard"
                  onChange={searchInput}
                  style={{
                    margin: "4px",
                    width: "88%",
                  }}
                />
              </div>
            )}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={(event) => {
                if (localStorage.getItem("jwt")) handleProfileMenuOpen(event);
                else history.push("/login");
              }}
              color="inherit"
              style={{ outline: "none" }}
            >
              {localStorage.getItem("jwt") ? (
                <Button className="mr-2" color="transparent">
                  {JSON.parse(localStorage.getItem("user")).name}
                </Button>
              ) : (
                <Button color="transparent">Login</Button>
              )}
            </IconButton>
            {localStorage.getItem("user") &&
              JSON.parse(localStorage.getItem("user")).category ===
                "customer" && (
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
              )}
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
