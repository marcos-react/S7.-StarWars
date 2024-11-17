import React from "react";
import { useNavigate } from "react-router-dom";
import StarwarsContainer from "../components/starwarsContainer/starwarsContainer.jsx";

function StarshipsPage() {
  const navigate = useNavigate();

  const handleBackToWelcome = () => {

    navigate("/");
  };

  return (
    <div className="p-4">
      <StarwarsContainer />
      <button onClick={handleBackToWelcome} className="btn btn-secondary mt-4">
        Tornar a la benvinguda
      </button>
    </div>
  );
}

export default StarshipsPage;