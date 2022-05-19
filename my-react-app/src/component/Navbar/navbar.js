import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { data } from "../../Data/navlink";

const Navigation = () => {
  return (
    <>
      <div className="header">
        <nav>
          <button className="logout">login</button>
          {data.map((element, index) => {
            return (
              <Link className="Link" to={element.path}>
                {element.name} {console.log(element)}
              </Link>
            );
          })}
          ;<img className="logo" src="\Twenteefore - Logo 2 (2).png"></img>
        </nav>
      </div>
    </>
  );
};
export default Navigation;
