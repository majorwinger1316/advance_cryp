import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> Explore different Encryption and Decryption Algorithms </h1>
        <p> Discover a range of Encryption methods to secure your data </p>
        <div className="explore">
          <Link to="/menu">
            <button> EXPLORE ALGORITHMS </button>
          </Link>
        </div>
        <div className="know">
          <Link to="/about">
            <button> WHAT IS CRYPTOGRAPHY? </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
