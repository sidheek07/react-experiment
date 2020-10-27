import React from "react";
import "./sidebar.css";
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="items">
        <ul>
      <Link to='/' style={{ textDecoration: 'none' }}> <li>HOME</li> </Link>
      <Link to='/profile' style={{ textDecoration: 'none' }}><li>PROFILE</li> </Link>                   
      <Link to='about' style={{ textDecoration: 'none' }}> <li>ABOUT</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;






