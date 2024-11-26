import React from "react";
import "./pantallaCarga.css";

const LoadingScreen: React.FC = () => {
  return (
    <div id="loading-screen">
      <div id="logo">
        <img src="/assets/images/academia-src/a-circulo.png" alt="Logo" />
        <div id="spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
