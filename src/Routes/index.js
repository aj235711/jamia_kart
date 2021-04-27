import React
  , { useEffect }
  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProductPage from "./ProductPage";
import Cart from './Cart';
import AddProduct from './AddProduct';
import Bars from "../Components/Bars";


const Routes = () => {
    return (
      <Router>
        <Route path={["/jamia_kart","/product:id","/cart"]} component={Bars} />
        <Switch>
          <Route path="/jamia_kart" exact component={HomePage} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/product:id" exact component={ProductPage} />
          <Route path="/cart" exxact component={Cart} />
          <Route path="/addproduct" exact component={AddProduct} />
        </Switch>
      </Router>
    );
  };
  
  export default Routes;
  