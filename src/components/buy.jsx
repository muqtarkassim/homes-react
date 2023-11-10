import React from "react";
import Item from "./item";
import Footer from "./footer";

export default function BuyHome({data}){
  const home=  data.map((item)=><Item key={item.id} bedrooms={item.bedrooms}
    location={item.location} price={item.price} 
    bathrooms={item.bathrooms} image={item.image} area={item.area}

    />)
    return(
        <>  
        <h3>Available Homes to buy</h3>
          <div className="All-buyCards">

           {home}
           </div>
           <Footer/>
         
        </>
    )
}