import React from "react";
import imageLogo from "./images/png/logo-no-background.png"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (  

    <>
      <div className="header">
        <div className="group-1">
          <p id="buy-id"><Link to= "/buy">Buy</Link></p>
          <p id="rent-id"><Link to= "/buy">Rent</Link></p>
          <p id="sell-id"><Link to= "/sell">Sell</Link></p>
          <p id="agent-id">Agent Finder</p>
        </div>
        <div className="logo">
          <a href="/">
            <img src={imageLogo} alt="Logo" />
          </a>
        </div>
        <div className="contact">
          <p>
            <a href="mailto:muqtarabdiaziz8.email@gmail.com">Email-me</a>
          </p>
          <p>Sign in </p>
        </div>   
      </div> 
    </> 
  );
}