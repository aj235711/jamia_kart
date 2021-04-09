import React from "react";
import axios from "axios";
import HomePage from "./Components/HomePage"
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';


const App = () => {
  axios.get('https://fakestoreapi.com/products/1').then(res => console.log(res));
  return (
    <>
      {/* <RegisterForm /><LoginForm /> */}
      <HomePage />
      </>
  );
};

export default App;
