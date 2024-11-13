import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import StarwarsContext from "../../context/StarwarsContext";
import Header from "../header/header";

function StarshipDetail() {
  const { id } = useParams();
  const { getStarshipById, getId, getStarshipImageUrl } =
    useContext(StarwarsContext);

  //  Obtain details specific from the starship by ID
  const ship = getStarshipById(id);

  if (!ship) {
    return <p>Starship not found</p>;
  }

  // Extract ID Starship and generate URL of the image
  const shipId = getId(ship.url);
  const picture = getStarshipImageUrl(shipId);

  return (
    <div className="bg-black min-h-screen p-5 text-white">
      <Header />
      <h2 className="text-3xl font-bold mb-10 mt-10 flex justify-center border-y-2 border-neutral-100">STARSHIP</h2>

      {/* Main container between column without gap */}
      {ship && (
        <div className="grid grid-cols-2">
          {/* Image starship */}
          <div className="flex justify-end mr-10">
            
            <img
              src={picture}
              alt={`Image of ${ship.name}`}
              className="w-96 h-64 object-cover rounded-l-lg shadow-lg"
            />
          </div>

          {/* Details starship */}
          <div className="bg-gray-900 p-6 rounded-r-lg shadow-lg text-gray-400 -ml-8">
            <h1 className="text-4xl font-bold mb-4">{ship.name}</h1>

            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis cumque reprehenderit pariatur porro autem eius
              possimus, voluptates culpa adipisci dolores.
            </p>

            {/* two columns starship id */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>
                  <strong>Model:</strong> {ship.model}
                </p>
                <p>
                  <strong>Cost in Credits:</strong> {ship.cost_in_credits}
                </p>
                <p>
                  <strong>Atmospheric Speed:</strong> {ship.max_atmosphering_speed}
                </p>
              </div>
              <div>
                <p>
                  <strong>Manufacturer:</strong> {ship.manufacturer}
                </p>
                <p>
                  <strong>Length:</strong> {ship.length}
                </p>
                <p>
                  <strong>Crew:</strong> {ship.crew}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StarshipDetail;


