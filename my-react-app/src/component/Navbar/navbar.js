import React ,{useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { data } from "./navlink";
// import "bootstrap/dist/css/bootstrap.min.css";



const Navigation = () => {
  const [activeHam, setActiveHam] = useState(false);
	const menuItems = (
		<>
		 {data.map((element, index) => {
            return (
              
              <Link className="Link" to={element.path}>
                {element.name} 
              </Link>
            
              
            );
          })}
		</>
	);

  return (
    <>
      {/* <div className="header">
        <nav>
        <svg className="bar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
          <button className="logout">login</button>
         
          {data.map((element, index) => {
            return (
              
              <Link className="Link" to={element.path}>
                {element.name} 
              </Link>
              
            );
          })}
          <img className="logo" src="\Twenteefore - Logo 2 (2).png"></img>
        </nav>
      </div>
       */}
      
      <div className="navbar-container">
			<nav>
				<div className="nav-container">
					<img className="nav-brand" src="\Twenteefore - Logo 2 (2).png"></img>
					<div className="menu">{menuItems}</div>
          <button className="logout">login</button>
					<button
						className={activeHam ? "hamburger active-hamburger" : "hamburger"}
						onClick={() => setActiveHam(!activeHam)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</nav>
			{activeHam && <div className="nav-dropdown">{menuItems}</div>}
		</div>
      
      
      
      
      

    </>
  );
};
export default Navigation;
