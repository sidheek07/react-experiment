import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="items">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PROFILE</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
