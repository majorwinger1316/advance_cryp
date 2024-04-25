import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../styles/Test.css";

function Test() {
  return (
    <div className="test">
      <div className="head">
        <h1>
          Start Encrypting your Plain Texts or Decrypting your Cipher Texts
        </h1>
        <Typewriter
          options={{
            strings: [
              "Guard your Passwords.",
              "The correct way!",
              "Try some of the encryption algorithms.",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "typer",
            cursorClassName: "cursor",
          }}
        />
        <div className="type">
          <Link to="/AES">
            <button>AES Encryption and Decryption</button>
          </Link>
          <Link to="/RSA">
            <button>RSA Encryption and Decryption</button>
          </Link>
          <Link to="/DES">
            <button>DES Encryption and Decryption</button>
          </Link>
          <Link to="/Caesar">
            <button>Caesar Cipher Encryption and Decryption</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Test;
