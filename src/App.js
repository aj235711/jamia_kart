import React
  , { useEffect }
  from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import AOS from "aos";
import ProductPage from "./Components/ProductPage";


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/jamia_kart" exact component={HomePage} />
        <Route path="/register" exact component={RegisterForm} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/product" exact component={ProductPage} />
      </Switch>
    </Router>
  );
};

export default App;
