import React from "react";
import imageLogo from "./images/png/logo-no-background.png"
import { Link, Navigate } from "react-router-dom";
export default function Navbar({isAuthenticated,setisAuthenticated}) {
    function handlesignout(){
        setisAuthenticated(false)
     //   {!isAuthenticated && <Navigate to="/signin" />}
    
    }
  return (  

    <>
      <div className="header">
        <div className="group-1">
          <p id="buy-id"><Link to= "/buy">Buy</Link></p>
          <p id="rent-id"><Link to= "/rent">Rent</Link></p>
          <p id="sell-id"><Link to= "/sell">Sell</Link></p>
          <p id="agent-id"><Link to= "/agents">Agents</Link></p>
        </div>
        <div className="logo">
        <Link to= "/">
            <img src={imageLogo} alt="Logo" />
            </Link>
        </div>
        <div className="contact">
          <p>
            <a href="mailto:muqtarabdiaziz8.email@gmail.com">Email-me</a>
          </p>
         { !isAuthenticated &&<p><Link to= "/signin">sign-in</Link> </p>}
         { isAuthenticated && <p
              onClick={handlesignout}>sign-out
                
           
            
            </p>}
        </div>   
      </div> 
      
    </> 
  );
}