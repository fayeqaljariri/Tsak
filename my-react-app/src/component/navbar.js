import React  from "react";
import {Link}  from "react-router-dom";
import "./navbar.css"
const Navigation = () => {
  return (
    <>
    <div className="header">
    <nav >
    <button className="logout">login</button>
    
    <Link className="Link" to="/FAQs">
          FAQs
          </Link> 
          <Link className="Link" to="/Mrketplace">
            Mrketplace
          </Link>
          <Link className="Link" to="/Leaderboards">
            Leaderboards
          </Link>
  
          <Link className="Link" to="/Order">
            Order
          </Link>
          <Link className="Link" to="/Home">
           Home
          </Link>
          
          <img className="logo" src="\Twenteefore - Logo 2 (2).png"></img>
          </nav>

</div>
    </>
  );
};
export default Navigation;
