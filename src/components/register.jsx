import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

export default function Register() {
  const [formdata, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  
  const [success, setsuccess] = useState(false);

  function handleRegister(e) {
    e.preventDefault();

    fetch("http://localhost:8000/users", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formdata.username,
        password: formdata.password,
        email: formdata.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setsuccess(true)
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  }

  const handleChange = (e) => {
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
          <h4>Register as a new user</h4>
        </div>
        <div className="formsign">
          <form onSubmit={handleRegister}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formdata.username}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Register</button>
          </form>
        </div>

       
        {success && <p>succesfully registered as new user</p>}

        <h6>
          <NavLink to="/signin" className="nav-link" >Sign-in </NavLink>
        </h6>
      </div>
    </>
  );
}
