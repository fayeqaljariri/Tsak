import React  from "react";
import {Link}  from "react-router-dom";
import "./navbar.css"
const Navigation = () => {
  return (
    <>
      <div className="NavBar">
         
          <Link className="Link" to="/FAQs">
          FAQs
          </Link> 
          <Link className="Link" to="/Order">
            Order
          </Link>
          <Link className="Link" to="/Leaderboards">
            Leaderboards
          </Link>
          <Link className="Link" to="/Mrketplace">
            Mrketplace
          </Link>
          <Link className="Link" to="/FAQs">
          FAQs
          </Link>
          <button className="logout">Logout</button>
        
      </div>
    </>
  );
};
export default Navigation;
