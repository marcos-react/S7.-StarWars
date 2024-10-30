import React, { useContext } from "react";
import StarwarsContext from "../../context/StarwarsContext";

function StarwarsContainer({ logo }) {
  const { starships, loading } = useContext(StarwarsContext);

  return (
    <div className="bg-black">
      <header>
        <div className="flex justify-center items-center py-4">
          <h1 className="text-center">
            <img src={logo} className="h-32 mx-auto" alt="Star Wars Logo" />
          </h1>
          <p className="text-white px-5 absolute right-4">
            LOG IN // SIGN UP
          </p>
        </div>
        <nav className="flex justify-center border-y-2 border-neutral-100">
          <ul className="menu menu-horizontal text-white gap-4">
            <li> HOME </li>
            <li> STARSHIPS </li>
          </ul>
        </nav>
      </header>
      {loading ? (
        <p>Loading starships...</p>
      ) : (
        <ul className="flex flex-col justify-center">
          {starships.map((ship) => (
            <li key={ship.name}>
              <div className="card bg-gray-900 mb-4 mx-11 my-4">
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
      )}
    </div>
  );
}

export default StarwarsContainer;
