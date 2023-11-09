import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/style.css";
import "../css/style2.css";
import Home from "./Home";
import BuyHome from "./buy";
import Sell from "./sell";
import { Route, Routes } from "react-router-dom";


export default function App(){
    const[buydata,setbuydata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/buy')
.then(res =>res.json())
.then(data =>{ //console.log(data)
    setbuydata(data)
  } )
    },[])
   // console.log(buydata)
    return(

        <> 
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/books" element={<h1>hey theer </h1>} />
       <Route path="/sell" element={<Sell databuy={buydata} setdata={setbuydata}/>} />
       <Route path="/buy" element={<BuyHome data={buydata} />} />
       
       </Routes>

         </>
    )
}