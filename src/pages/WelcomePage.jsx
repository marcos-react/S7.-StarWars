import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";

function WelcomePage() {
  const navigate = useNavigate();

  const handleStarships = () => {
    navigate("/starships");
  };

  return (
    <div className="bg-black">
      <Header />
      <h1 className="text-4xl font-bold mb-6 text-white mt-4">Benvingut/da!</h1>
      <p className="text-lg mb-8 text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus expedita
        quod placeat sequi totam possimus ut unde ipsa atque suscipit minima,
        corporis ullam alias, nisi excepturi quas perspiciatis maiores. Aperiam
        praesentium enim quidem non, repudiandae earum, soluta ipsum placeat
        illo est unde distinctio velit sequi deleniti aliquid blanditiis neque
        facilis ratione. Provident quas qui nobis dolor praesentium blanditiis.
        Vel, ipsum? Id amet dolorum aut nostrum hic nemo dicta ex? Eius, soluta!
        Accusamus fugit nihil possimus numquam, voluptates consectetur maxime
        quam cupiditate, reprehenderit ea eaque neque deleniti aliquam quo
        assumenda consequatur. Iusto voluptatem facere minus expedita fuga
        recusandae neque veritatis iure?
      </p>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleStarships}
          className="btn btn-primary text-white px-4 py-2 rounded"
        >
          Starships
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
