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
        const data = await response.json();
        if (data.success) {
          setList(data.data); // Set the food list from the response
        }
      } catch (error) {
        console.error("Error fetching food list:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, [url]); // Dependency array with url

  return (
    <div className="container">
      <h2>List of food</h2>
      {list.length > 0 ? (
        list.map((item, index) => (
          <div key={index} className="foodtable">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <p>No food items available.</p>
      )}
    </div>
  );
};

export default Listfood;