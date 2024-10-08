import React, { useState } from "react";
import axios from "axios";  // You missed this import
import "./Addfood.css";

const Addfood = () => {
  const url = 'http://localhost:4500';

  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    category: "breakfast",
    image: null
  });

  const onchangeHandler = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      setData(data => ({ ...data, image: files[0] }));
    } else {
      setData(data => ({ ...data, [name]: value }));
    }
  };

  const onsubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("image", data.image);
    formData.append("category", data.category);

    try {
      const response = await axios.post(`${url}/food/addfood`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Food added successfully:", response.data);
    } catch (error) {
      console.error("There was an error adding the food:", error);
    }
  };

  return (
    <div className="addfood">
      <h1>Add New Food Item</h1>
      <form onSubmit={onsubmitHandler}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={onchangeHandler}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={onchangeHandler}
            required
          />
        </label>
        <label>
          Product Category:
          <select name="category" value={data.category} onChange={onchangeHandler}>
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
          <textarea
            name="description"
            value={data.description}
            onChange={onchangeHandler}
            required
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            name="image"
            onChange={onchangeHandler}
            required
          />
        </label>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default Addfood;
