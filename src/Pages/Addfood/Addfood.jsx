import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import "./Addfood.css";

const Addfood = () => {
  const url = 'http://localhost:4500';

  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    category: "breakfast",
    image: null, // Initialize image with null for file upload
  });

  // Handle input changes
  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input changes (specifically for image upload)
  const onImageChangeHandler = (event) => {
    setData((prevData) => ({
      ...prevData,
      image: event.target.files[0], // For file upload
    }));
  };

  // Handle form submission
  const onsubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("image", data.image); // File
    formData.append("category", data.category);

    try {
      const response = await axios.post(`${url}/food/addfood`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // If the response is successful, show success toast
      if (response.data.success) {
        toast.success("Food item added successfully!");
      } else {
        // If something went wrong, show error toast with message
        toast.error("Failed to add food item.");
      }
    } catch (error) {
      // Handle error and show error toast
      console.error("Error adding food item", error);
      toast.error("Error adding food item. Please try again.");
    }
  };

  return (
    <div className="addfood">
      <ToastContainer /> {/* Add ToastContainer to display toasts */}
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
          <select
            name="category"
            value={data.category}
            onChange={onchangeHandler}
          >
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
            onChange={onImageChangeHandler}
            required
          />
        </label>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default Addfood;
