import React from "react";
import "./pantallaCarga.css";

const LoadingScreen: React.FC = () => {
  return (
    <div id="loading-screen">
      <div id="logo">
        <img src="logo.png" alt="Logo" />
        <div id="spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
