import React, { useState } from "react";
import Footer from "./footer";
export default function Sell({databuy,setdata}) {
  const [formData, setFormData] = useState({
    type: "",
    price: "",
    area: "",
    bed: "",
    bath: "",
    loc: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //////>>>>>>>><<<<<<<<<<>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<
function handleSubmit(e){
    fetch('http://localhost:8000/buy',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                "price":formData.price,
                "bedrooms":formData.bed,
                "bathrooms":formData.bath,
                "location":formData.loc,
                "area":formData.area,
                "image":formData.image
            }
            )
        })
        .then(res =>res.json())
        .then(data =>{console.log(`got back this${data}`)
             setdata([...databuy,data])
          })
          .catch(error => console.log('error', error));
        
        
    e.preventDefault();
    //console.log(formData)
}
////////////////////////>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<
  return (
    <>
    <div className="headed-content">
    <h3> Enter your Home details here</h3>
    <p> then submit to make it available in the markets</p> </div>
    <div className="form-data">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Type"
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </div>
        <div>
          <label htmlFor="area">Area:</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Area"
          />
        </div>
        <div>
          <label htmlFor="bed">Bedrooms:</label>
          <input
            type="text"
            name="bed"
            value={formData.bed}
            onChange={handleChange}
            placeholder="Bedrooms"
          />
        </div>
        <div>
          <label htmlFor="bath">Bathrooms:</label>
          <input
            type="text"
            name="bath"
            value={formData.bath}
            onChange={handleChange}
            placeholder="Bathrooms"
          />
        </div>
        <div>
          <label htmlFor="loc">Location:</label>
          <input
            type="text"
            name="loc"
            value={formData.loc}
            onChange={handleChange}
            placeholder="Location"
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
        </div>
        <button type="submit" className="sign-rec">Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}