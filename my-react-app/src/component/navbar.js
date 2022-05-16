import React  from "react";
import { Link}  from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div className="NavBar">
        <>
          <Link className="Link" to="/Home">
            Home
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
          <button className="logout">Logout</button>
        </>
      </div>
    </>
  );
};
export default Navigation;
