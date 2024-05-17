import React from "react";
import headerImage from "../../Images/HeaderForMentalHealth.jpg";
import "../Header/Header.css";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${headerImage})`,
          height: "500px", // Specify height

          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the background image
        }}
      >
        {/* <img className="headerImg" src={headerImage} alt="Header" /> */}
        <div className="hamburger">
          <Hamburger size="28" color="white" toggled={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        <nav className="nav-bar">
          <ul className={"nav-links " + (isMenuOpen ? "open" : "")}>
            <li>
              <Link onClink={() => setIsMenuOpen(false)} to="/">
                {" "}
                Home
              </Link>
            </li>

            <li>
              <Link onClink={() => setIsMenuOpen(false)} to="/work-stress">
                {" "}
                Work Stress
              </Link>
            </li>
            <li>
              <Link onClink={() => setIsMenuOpen(false)} to="/Resources">
                {" "}
                Resources
              </Link>
            </li>
            <li>
              <Link onClink={() => setIsMenuOpen(false)} to="/DiscussionBoard">
                {" "}
                Discussion Board
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
