import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 animate-gradient">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center border border-white/20 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Welcome to <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
            User Management App
          </span>
        </h1>
        <p className="text-lg text-white/90 mt-4">
          Manage users effortlessly with a stunning UI powered by React, MUI & Tailwind.
        </p>
        <Link to="/users">
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-300 to-pink-400 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            View Users →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
