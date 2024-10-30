// App.jsx
import React from "react";
import starwars from "./assets/star-wars.svg";
import StarwarsContainer from "./components/starwarsContainer/starwarsContainer";
import { StarwarsProvider } from "./context/StarwarsContext";
import "./App.css";

function App() {
  return (
    <StarwarsProvider>
      <StarwarsContainer logo={starwars} />
    </StarwarsProvider>
  );
}

export default App;
