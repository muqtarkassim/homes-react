import React from "react";
import Footer from "./footer";
import Header from "./head";
import Middle from "./middle";

export default function Home({isAuthenticated}){
    return(
        <>
      
            <Header isAuthenticated={isAuthenticated}/>
            <Middle/>
            <Footer/>
        </>
    )
}