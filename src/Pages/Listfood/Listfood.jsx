import React, { useState, useEffect } from "react";
import axios from "axios";

const Listfood = () => {
  const url = "http://localhost:4500";
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
  }, [url]); // Dependency array with url

  return (
    <div className="container">
      <h2>List of Food</h2>
      {list.length > 0 ? (
        list.map((item, index) => (
          <div key={index} className="foodtable">
             <img
              src={`${url}/uploads/${item.image}`} />
            <p>Name: {item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
          </div>
        ))
      ) : (
        <p>No food items available.</p>
      )}
    </div>
  );
};

export default Listfood;
