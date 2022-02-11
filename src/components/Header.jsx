import React from 'react'
import logo from '../images/logo.svg';
import "../App.css";
//import { Link } from "react-router-dom";

const Header = () =>  {
    return (
        <div className="HeaderCss">
        <h1>News Website</h1>
         <img src={logo} className="App-logo" alt="logo" /> 
        </div>
    )
}
export default Header;

