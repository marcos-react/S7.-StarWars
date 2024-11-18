// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import starwars from "./assets/star-wars.svg";
import StarwarsContainer from "./components/starwarsContainer/starwarsContainer";
import StarshipDetail from "./components/starshipDetail/starshipDetail";
import { StarwarsProvider } from "./context/StarwarsContext";
import WelcomePage from "./pages/WelcomePage";
import StarshipsPage from "./pages/StarshipsPage";
import LoginFormPage from "./pages/LoginFormPage";
import RegisterFormPage from "./pages/RegisterFormPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <StarwarsProvider>
      <Router>
        <Routes>
          {/* Route Starship */}
          {/* <Route path="/" element={<StarwarsContainer logo={starwars} />} /> */}

          {/* Public Routes */}

          <Route path="/" element={<WelcomePage />} />

          {/* Route login */}

          <Route path="/login" element={<LoginFormPage />} />

          {/* Route register */}

          <Route path="/register" element={<RegisterFormPage />} />

          {/* Route auth */}

          <Route path="/auth" element={<AuthPage />} />

          {/* Protected routes */}
          
          <Route
            path="/starships"
            element={
              <ProtectedRoute>
                <StarshipsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/starships/:id"
            element={
              <ProtectedRoute>
                <StarshipDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </StarwarsProvider>
  );
}

export default App;
