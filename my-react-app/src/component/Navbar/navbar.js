import React, { useState } from "react";
import { Link } from "react-router-dom";
import navBarcss from "./navbar.module.css";
import { data } from "./data";

const Navigation = () => {
  const [activeHam, setActiveHam] = useState(false);
  const menuItems = (
    <>
      {data.map((element, index) => {
        return (
          <Link className={navBarcss.Link} to={element.path}>
            {element.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <>
      <div className={navBarcss.navbarcontainer}>
        <nav>
          <div className={navBarcss.navcontainer}>
            <img
              className={navBarcss.navbrand}
              src="\Twenteefore - Logo 2 (2).png"
            ></img>
            <div className={navBarcss.menu}>{menuItems}</div>
            <button className={navBarcss.logout}>login</button>
            <button
              // className={{activeHam ? { navBar.hamburger} : {navBar.hamburger}}}
              className={navBarcss.hamburger}
              onClick={() => setActiveHam(!activeHam)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
        {activeHam && <div className={navBarcss.navdropdown}>{menuItems}</div>}
      </div>
    </>
  );
};
export default Navigation;
