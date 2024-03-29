import React, { useState, useEffect } from "react";
import Logo from "../assets/encrypt.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        setOpenLinks(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <Link to="/">
          <h1>Advance Crypt</h1>
        </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/test">Test</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
