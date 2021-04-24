import React
  , { useEffect }
  from "react";
import AOS from "aos";

import Routes from './Routes';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Routes />
  );
};

export default App;
