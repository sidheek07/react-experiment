import React from "react";
import "./navbar.css";

function Navabr() {
  return (
    <div className="navbar">
      <ul className="ul">
        <li>
          <a>HOME</a>
        </li>
        <li>
          <a href="#">PROFILE</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
      </ul>
    </div>
  );
}
export default Navabr;
