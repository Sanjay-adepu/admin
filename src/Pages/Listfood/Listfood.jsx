import React, { useState, useEffect } from "react";
import "./Listfood.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Listfood = () => {

  const url = "https://yumio-backend.onrender.com";
  const [list, setList] = useState([]);

  // Use useEffect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/food/getfood`);
        const data = response.data; // Correctly access the data

        console.log("API Response:", data); // Log response for debugging

        if (data.success) {
          setList(data.data); // Set the food list from the response
        } else {
          console.error("Failed to fetch food items:", data.message);
        }
      } catch (error) {
        console.error("Error fetching food list:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, [url]); 

  // Function to remove food item
  const removefood = async (foodid) => {
    try {
      const response = await axios.post(`${url}/food/removefood`, { id: foodid });
      const data = response.data;

      if (data.success) {
        // Update the list by filtering out the removed item
        setList(list.filter((item) => item._id !== foodid));
        
        // Show success toast notification
        toast.success("Food item removed successfully!");
      } else {
        console.error("Failed to remove food:", data.message);
        toast.error("Failed to remove food item!");
      }
    } catch (error) {
      console.error("Error occurred while removing food:", error);
      toast.error("An error occurred while removing the food item.");
    }
  };

  return (
    <div className="container">
      <ToastContainer /> {/* Include the ToastContainer for toast notifications */}
      <h2>List of Food</h2>
      {list.length > 0 ? (
        list.map((item, index) => (
          <div className="foodtable">
  <button className="remove-button" onClick={() => removefood(item._id)}>
    Remove
  </button>
  <img src={`${url}/uploads/${item.image}`} />
  <p><span>Name:</span> {item.name}</p>
  <p><span>Price:</span> {item.price}</p>
  <p><span>Description:</span> {item.description}</p>
  <p><span>Category:</span> {item.category}</p>
</div>
        ))
      ) : (
        <p>No food items available.</p>
      )}
    </div>
  );
};

export default Listfood;
