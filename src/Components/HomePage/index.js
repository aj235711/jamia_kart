import React from "react";
import NavBar from './NavBar.js';
import Nav2 from './Nav2.js';
import Main from './Main.js';


const HomePage = () => {
    console.log(localStorage.getItem('jwt'));
    return (
        <div>
            <div style={{position:"fixed", minWidth: '1294px', overflowX:"auto", top:"0", width:"100%", zIndex:"1000"}}>
                <NavBar />
                <Nav2 />
            </div>
            <Main />
        </div>
    )
}

export default HomePage