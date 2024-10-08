import React from "react";
import "./Addfood.css";
import {useState} from "react";
const Addfood = () => {
  const url = 'https://admin-mf1y.onrender.com'
  
  const [data,setdata] = useState({
    name:"",
    price:"",
    description:"",
    category:"breakfast",
    image:""
  });
  
  const onchangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setdata(data=>({...data,[name]:value}))
  }
  
  
  const onsubmitHandler =async(event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("price",data.price)
    formData.append("description",data.description)
    formData.append("image",data.image)
    formData.append("category",data.category)
    
    const response = await axios.post(`${url}/food/addfood`,formData)
    
  }
  
  return (
    <div className="addfood">
      <h1>Add New Food Item</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Price:
          <input type="number" name="price" required />
        </label>
        <label>
          Product Category:
          <select name="category">
            <option value="breakfast">Breakfast</option>
            <option value="burgers">Burgers</option>
            <option value="cake">Cake</option>
            <option value="chocolates">Chocolates</option>
            <option value="icecreams">Ice Creams</option>
            <option value="kfc">KFC</option>
            <option value="samosa">Samosa</option>
            <option value="seafood">Seafood</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>
        </label>
        <label>
          Description:
          <textarea name="description" required />
        </label>
        <label>
          Image:
          <input type="file" name="image" required />
        </label>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default Addfood;
