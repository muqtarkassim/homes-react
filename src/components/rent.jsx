import React from "react";
import Item from "./item";
import Footer from "./footer";

export default function RentHome({data}){
  const home=  data.map((item)=><Item key={item.id} bedrooms={item.bedrooms}
    location={item.location} price={item.price} 
    bathrooms={item.bathrooms} image={item.image} area={item.area}

    />)
    return(
        <>  
        <h3> Homes to rent </h3>
          <div className="All-buyCards">

           {home}
           </div>
           <Footer/>
         
        </>
    )
}