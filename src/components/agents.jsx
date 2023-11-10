import React from "react";
import Footer from "./footer";


export default function Agent({data}){
    const mappeddata=data.map((agent)=>{
        return(
        <div className="All-container" key={agent.id}>
        <div className="image-div">
            <img src={agent.image} alt="img"></img>
        </div>
        <div className="">
            <h5>Name: {agent.name}</h5>
            <p> Email: {agent.email}</p>
            <p> Phone no: {agent.phone}</p>
        </div>
    </div>)}

    )
    return(
        <>
        <h3> Here is a list of Available Agents</h3>
            <div className="container-head2">
               {mappeddata}
            </div>
            <Footer/>
        </>
    )
}