import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StarwarsContext from "../../context/StarwarsContext";
import Header from "../header/header";

function StarwarsContainer() {
  const { starships, loading, getId, loadNextPage } =
    useContext(StarwarsContext);
  const navigate = useNavigate();

  const handleCardClick = (url) => {
    const id = getId(url);
    navigate(`/starships/${id}`);
  };

  return (
    <div className="bg-black">
      <Header />
     
        <>
          <ul className="flex flex-col justify-center">
            {starships.map((ship) => (
              <li key={ship.name}>
                <div
                  className="card bg-gray-900 mb-4 mx-11 my-4 cursor-pointer"
                  onClick={() => handleCardClick(ship.url)}
                >
                  <div className="card-body">
                    <h2 className="card-title text-white">
                      <strong>Name:</strong> {ship.name} <br />
                    </h2>
                    <p className="text-white">
                      <strong>Model:</strong> {ship.model}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            <button
              onClick={loadNextPage} // Call the function to load more starships
              className=" bg-green-500 text-white p-2 rounded"
            >
              view more
            </button>
          </div>
        </>
      
    </div>
  );
}

export default StarwarsContainer;
