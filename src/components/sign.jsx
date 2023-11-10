import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

export default function Signin({ setIsAuthenticated,isAuthenticated }) {
  const [formdata, setFormData] = useState({
    username: "",
    password: "",
  });
const[error,seterror]=useState(false)
  function handleSignin(e) {
    e.preventDefault();
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);

        const user = data.find(
          (item) =>
            item.username === formdata.username &&
            item.password === formdata.password
        );

        if (user) {
          setIsAuthenticated(true);
         
        } else {
          console.log("incorrect username or password");
          // Handle incorrect username or password feedback (e.g., set a state)
          seterror(true)
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  return (
    <>
      
      <div className="sigin">
      <div className="outer-header">
        <h4>Kindly sign-in to access more features</h4>
      </div>
        <div className="formsign">
          <form onSubmit={handleSignin}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formdata.username}
                onChange={handlechange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={handlechange}
              />
            </label>
            <button type="submit">Signin</button>
          </form>
        </div>
        {error && <p> incorrect username or password</p>}
        <h6><NavLink to="/register" >Register</NavLink></h6>
        
      </div>
      {isAuthenticated && <Navigate to="/" />}
    </>
  );
}