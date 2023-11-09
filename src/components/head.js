import React from "react";

export default function Header(){
    return(
        <>
        <div className="container-head" id="container-head-id">
        <div className="image-container">
         <img src="https://renaissance-homes.com/sites/default/files/front_hero_slides/RH-4437_0v2-compressed-V3.jpg" alt="img"/>
           
        </div>
         <div className="content">
            <h2> Agents . Tours . Homes . Rents</h2>
            <input type="text" placeholder="enter address"/>
           </div>
        </div>
        <div className="recommendation">
            <div className="get-rec">
                <h3>Get home recommendations</h3>
                <p>sign in for a more personalized experience </p>
                <button className="sign-rec">Sign in</button>
            </div>
            <div className="image-rec">
                <div className="image-containers">
                
        <img src="https://static8.depositphotos.com/1392258/871/i/450/depositphotos_8711123-stock-photo-luxury-stone-home-at-dusk.jpg" alt="img"/>
    </div>
    <div className="image-containers">
        <img src="https://st.depositphotos.com/1163717/3352/i/450/depositphotos_33527949-stock-photo-house-10.jpg" alt="img"/>
    </div>
    <div className="image-containers">
        <img src="https://static9.depositphotos.com/1625039/1145/i/450/depositphotos_11458373-stock-photo-beautiful-large-new-upscale-house.jpg" alt="img"/>
    </div>
            </div>
        </div>
        </>
    )
}