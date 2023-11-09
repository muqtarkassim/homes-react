import React from "react";
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
                <button  id="buy-homes">Browse homes</button>
            </div>
            </div>
        <div className="inner-card">
                <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.webp" alt="img"/>
                <div className="house-content">
                    <h3>Sell a home </h3>
                    <p>Sell your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                    <button id="sell-homes">Sell homes</button>
                </div>
            </div>
            <div className="inner-card">
                <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp" alt="img"/>
                <div className="house-content">
                    <h3>Rent a home </h3>
                    <p>Rent a place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                    <button  id="rent-homes">Rent homes</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}