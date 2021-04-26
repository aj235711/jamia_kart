import React
  , { useEffect }
  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProductPage from "./ProductPage";
import Cart from './Cart';

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/jamia_kart" exact component={HomePage} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/product:id" exact component={ProductPage} />
          <Route path="/cart" exxact component={Cart} />
        </Switch>
      </Router>
    );
  };
  
  export default Routes;
  