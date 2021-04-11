import React from "react";
import NavBar from './NavBar.js';
import Nav2 from './Nav2.js';
import Main from './Main.js';


const HomePage = () => {
    return (
        <div>
            <div style={{position:"fixed", overflow:"hidden", top:"0", width:"100%", zIndex:"1000"}}>
                <NavBar />
                <Nav2 />
            </div>
            <Main />
        </div>
    )
}

export default HomePage