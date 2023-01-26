import React from "react";
import { Link } from "react-router-dom";
import Styles from "../components/css/Header.css";

const Header = () => {
  return (
    <div className="Maincontainer">
      <div className="subcontainer">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logoimg"></img>
        <Link to={"/"}>Sign in</Link>
      </div>
      <div className="mainbodycontainer">
        <h1>Unlimited Movies, TV shows and more</h1>
        <p>Watch anywhere cancel anytime</p>
        <Link to={"/"}>
          Watch for Free 30 days
          <i className="fa-solid fa-angle-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
