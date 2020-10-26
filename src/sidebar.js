import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="items">
        <ul>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>PROFILE</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
