import React, { createContext, useState, useEffect } from "react";

// Create context
const StarwarsContext = createContext();

// Create provider
export const StarwarsProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships/?page=1");
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        console.error("Error to get starships:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  return (
    <StarwarsContext.Provider value={{ starships, loading }}>
      {children}
    </StarwarsContext.Provider>
  );
};

export default StarwarsContext;

