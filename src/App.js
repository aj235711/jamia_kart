import React from "react";
import axios from "axios";
import HomePage from "./HomePage"
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';


const App = () => {
  return (
    <>
      {/* <RegisterForm /><LoginForm /> */}
      <HomePage />
      </>
  );
};

export default App;
