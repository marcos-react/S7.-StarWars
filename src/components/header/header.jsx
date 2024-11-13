import React from "react";
import logo from "../../assets/star-wars.svg";

function Header() {
  return (
    <header>
      <div className="flex justify-center items-center py-4">
        <h1 className="text-center">
          <img src={logo} className="h-32 mx-auto" alt="Star Wars Logo" />
        </h1>
        <p className="text-white px-5 absolute right-4">LOG IN // SIGN UP</p>
      </div>
      <nav className="flex justify-center border-y-2 border-neutral-100">
        <ul className="menu menu-horizontal text-white gap-4">
          <li> HOME </li>
          <li> STARSHIPS </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
