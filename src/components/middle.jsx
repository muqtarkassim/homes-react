import React from "react";
import { NavLink } from "react-router-dom";
 export default function Middle(){
    return( 
         <>
          <div className="main-cards" id="main-card-id">
            <div className="all-cards">
            <div className="inner-card">
            <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp" alt="img"/>
                <div className="house-content">
                <h3>Buy a home </h3>
                <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <button  id="buy-homes">
                <NavLink to= "/buy" className="nav-link"  >Buy homes</NavLink>
                </button>
            </div>
            </div>
        <div className="inner-card">
                <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.webp" alt="img"/>
                <div className="house-content">
                    <h3>Sell a home </h3>
                    <p>Sell your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                    <button id="sell-homes">
                    <NavLink to= "/sell" className="nav-link"  >Sell homes</NavLink>
                    </button>
                </div>
            </div>
            <div className="inner-card">
                <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp" alt="img"/>
                <div className="house-content">
                    <h3>Rent a home </h3>
                    <p>Rent a place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                    <button  id="rent-homes">
                    <NavLink to= "/rent" className="nav-link" >Rent homes</NavLink></button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}