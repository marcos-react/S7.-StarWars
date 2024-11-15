// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import starwars from "./assets/star-wars.svg";
import StarwarsContainer from "./components/starwarsContainer/starwarsContainer";
import StarshipDetail from "./components/starshipDetail/starshipDetail";
import { StarwarsProvider } from "./context/StarwarsContext";
import "./App.css";

function App() {
  return (
    <StarwarsProvider>
        <Router>
          <Routes>
            {/* Route Starship */}
            <Route path="/" element={<StarwarsContainer logo={starwars} />} />

            {/* Route starship detail */}
            <Route path="/starships/:id" element={<StarshipDetail />} />
          </Routes>
        </Router>
    </StarwarsProvider>
  );
}

export default App;
