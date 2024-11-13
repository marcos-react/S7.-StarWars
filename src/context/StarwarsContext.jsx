// StarwarsContext.js
import React, { createContext, useState, useEffect } from "react";

const StarwarsContext = createContext();

const BASE_URL = "https://starwars-visualguide.com/assets/img"; // picture starship

export const StarwarsProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const localData = localStorage.getItem("starships");
        if (localData) {
          setStarships(JSON.parse(localData));
        } else {
          const response = await fetch(
            "https://swapi.dev/api/starships/?page=1"
          );
          const data = await response.json();
          setStarships(data.results);
          localStorage.setItem("starships", JSON.stringify(data.results));
        }
      } catch (error) {
        console.error("Error al obtener las naves:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  // Define the function getStarshipById in the context
  const getStarshipById = (id) => {
    return starships.find((s) => s.url.split("/").filter(Boolean).pop() === id);
  };

  const getId = (url) => {
    return url.split("/").filter(Boolean).pop(); // Extract id in url
  };

  const getStarshipImageUrl = (id) => {
    return `${BASE_URL}/starships/${id}.jpg`;
  };

  return (
    <StarwarsContext.Provider
      value={{ starships, loading, getStarshipById, getId, getStarshipImageUrl }}
    >
      {children}
    </StarwarsContext.Provider>
  );
};

export default StarwarsContext;
