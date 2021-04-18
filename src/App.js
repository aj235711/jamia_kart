import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";

const App = () => {
  return (
    <Router>
      <Switch>
       <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={RegisterForm} />
        <Route path="/login" exact component={LoginForm} />
      </Switch>
    </Router>
  );
};

export default App;
