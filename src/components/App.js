import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/style.css";
import "../css/style3.css";
import "../css/style2.css";
import Home from "./Home";
import BuyHome from "./buy";
import Sell from "./sell";
import RentHome from "./rent";
import Agent from "./agents";
import Signin from "./sign";
import Register from "./register";
import { Route, Routes, Navigate } from "react-router-dom";


export default function App(){
    const[buydata,setbuydata]=useState([])
    const[rentdata,setrentdata]=useState([])
    const[agentdata,setagentdata]=useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:8000/buy')
.then(res =>res.json())
.then(data =>{ //console.log(data)
    setbuydata(data)
  } )
    },[])
   // console.log(buydata)
   useEffect(()=>{
    fetch('http://localhost:8000/rent')
.then(res =>res.json())
.then(data =>{ //console.log(data)
    setrentdata(data)
} )
},[])
///
useEffect(()=>{
    fetch('http://localhost:8000/agents')
.then(res =>res.json())
.then(data =>{ //console.log(data)
setagentdata(data)
} )
},[])
///
    return(

        <> 
       <Navbar isAuthenticated={isAuthenticated} setisAuthenticated={setIsAuthenticated}/>
       <Routes>
       <Route path="/" element={<Home isAuthenticated={isAuthenticated}/>} />
       <Route path="/books" element={<h1>hey theer </h1>} />
       <Route
          path="/sell"
          element={
            isAuthenticated ? (
              <Sell databuy={buydata} setdata={setbuydata} />
            ) : (
              <Navigate to="/signin" />
            )}/>
       <Route path="/buy" element={<BuyHome data={buydata} />} />
       <Route path="/rent" element={<RentHome data={rentdata} />} />
       <Route path="/agents" element={<Agent data={agentdata}/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/signin" element={<Signin isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
       
       </Routes>

         </>
    )
}