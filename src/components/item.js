import React from "react";

export default function Item({price,area,bathrooms,bedrooms,location,image}){
    return(
    <>

     <div className="card-homes">
     
    <img src={image} alt="img"/>
    <h4>Price:{price}</h4>
    <span>Area:{area}sq</span>
    <span>Bathrooms|{bathrooms}</span>
    <span>Bedrooms:{bedrooms}</span>
    <p>Location:{location}</p>

     </div>  
    </>
    )
}  