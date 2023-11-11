import React from "react";
import imageLogo from "./images/png/logo-no-background.png"
import imagetoggle from "./images/icons8-menu-48.png"
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
<p id="buy-id"><Link to= "/buy" className="link-style">Buy</Link></p>
          <p id="rent-id"><Link to= "/rent" className="link-style">Rent</Link></p>
          <p id="sell-id"><Link to= "/sell" className="link-style">Sell</Link></p>
          <p id="agent-id"><Link to= "/agents" className="link-style">Agents</Link></p>

</div>
<div className="logo">
<Link to= "/">
            <img src={imageLogo} alt="Logo" />
            </Link>
</div>
<div className="contact">
    <p><a href="mailto:muqtarabdiaziz8.email@gmail.com">Email-me</a> </p> 
  
         { !isAuthenticated &&<p><Link to= "/signin" className="link-style">sign-in</Link> </p>}
         { isAuthenticated && <p
              onClick={handlesignout}>
                <Link to= "/signin" className="link-style">sign-out</Link>
           
            
            </p>}
</div>
<div className="main-menu">
    <img src={imagetoggle} alt="my"/>
</div>

</div>
<div className="menu-clicked" id="when-menu">
<div className="group-2">
<p id="rent-id2"><Link to= "/buy" className="link-style">Buy</Link></p>
    <p id="rent-id2"><Link to= "/rent" className="link-style">Rent</Link></p>
    <p id="sell-id2"><Link to= "/sell" className="link-style">Sell</Link></p>
    <p id="agent-id2"><Link to= "/agents" className="link-style">Agents</Link></p>
    <p><a href="mailto:muqtarabdiaziz8.email@gmail.com">Email-me </a> </p>
    { !isAuthenticated &&<p><Link to= "/signin" className="link-style">sign-in</Link> </p>}
         { isAuthenticated && <p
              onClick={handlesignout}>
                <Link to= "/signin" className="link-style">sign-out</Link>
           
            
            </p>}
</div>
</div>


</>
)}