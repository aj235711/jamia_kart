import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import AddProduct from "./AddProduct";
import Bars from "../Components/Bars";
import Orders from "./Orders";
import SellerHomePage from "./SellerHomePage";
import MyProducts from "./MyProducts";
import MyProfile from "./MyProfile";

const Routes = () => {
  return (
    <Router>
      <Route
        path={[
          "/jamia_kart",
          "/product:id",
          "/cart",
          "/orders",
          "/sellerhomepage",
          "/addproduct",
          "/myproducts",
          "/myprofile",
        ]}
        component={Bars}
      />
      <Switch>
        <Route path="/jamia_kart" exact component={HomePage} />
        <Route path="/register" exact component={RegisterForm} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/product:id" exact component={ProductPage} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/addproduct" exact component={AddProduct} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/sellerhomepage" exact component={SellerHomePage} />
        <Route path="/myproducts" exact component={MyProducts} />
        <Route path="/myprofile" exact component={MyProfile} />
      </Switch>
    </Router>
  );
};

export default Routes;
