import React, { createContext, useState, useEffect } from "react";

const StarwarsContext = createContext();
const BASE_URL = "https://starwars-visualguide.com/assets/img";

export const StarwarsProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // UseEffect to load from locastorage or API (first time)
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      try {
        const localData = localStorage.getItem("starships");
        if (localData) {
          // Load data of localstorage if there is any.
          setStarships(JSON.parse(localData));
        } else {
          // If no data in localstorage then load first time from API
          const response = await fetch(`https://swapi.dev/api/starships/?page=1`);
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

    loadInitialData();
  }, []);

  // useEffect to load more pages when page change and it is not 1
  useEffect(() => {
    if (page === 1) return; // Avoid load if page is 1.  Already was loaded.

    const fetchStarships = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
        const data = await response.json();
        const updatedStarships = [...starships, ...data.results];
        setStarships(updatedStarships);

        // Save update data in localstorage
        localStorage.setItem("starships", JSON.stringify(updatedStarships));
      } catch (error) {
        console.error("Error al obtener las naves:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, [page]); // Only execute when page change and it is not first time.

  // Function to increase the page.  This function is called in the button.
  const loadNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const getStarshipById = (id) => {
    return starships.find((s) => s.url.split("/").filter(Boolean).pop() === id);
  };

  const getId = (url) => {
    return url.split("/").filter(Boolean).pop();
  };

  const getStarshipImageUrl = (id) => {
    return `${BASE_URL}/starships/${id}.jpg`;
  };

  return (
    <StarwarsContext.Provider
      value={{
        starships,
        loading,
        getStarshipById,
        getId,
        getStarshipImageUrl,
        loadNextPage,
      }}
    >
      {children}
    </StarwarsContext.Provider>
  );
};

export default StarwarsContext;

