import React, { useContext } from "react";
import logo from "../../assets/star-wars.svg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { CiYoutube } from "react-icons/ci";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleWelcome = () => {
    navigate("/");
  };

  const handleStarships = () => {
    navigate("/starships");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header>
      <div className="flex justify-center items-center py-4">
        {/*
      <FaFacebook />
      <FaInstagram />
      <TfiTwitter />
      <CiYoutube />
      */}
        <h1 className="text-center">
          <img src={logo} className="h-32 mx-auto" alt="Star Wars Logo" />
        </h1>
        <p className="text-white px-5 absolute right-4">
          {user ? (
            <button onClick={handleLogout} className="hover:underline">
              LOG OUT
            </button>
          ) : (
            <>
              <button onClick={handleLogin} className="hover:underline">
                LOG IN
              </button>
              {" // "}
              <button onClick={handleRegister} className="hover:underline">
                SIGN UP
              </button>
            </>
          )}
        </p>
      </div>
      <nav className="flex justify-center border-y-2 border-neutral-100">
        <ul className="menu menu-horizontal text-white gap-4">
          <li>
            <button onClick={handleWelcome} className="hover:underline">
              HOME
            </button>
          </li>
          <li>
            <button onClick={handleStarships} className="hover:underline">
              STARSHIPS
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

