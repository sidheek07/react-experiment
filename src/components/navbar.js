import React from "react";
import "./navbar.css";
import {Link} from 'react-router-dom';

function Navabr() {
  return (
    <div className="navbar">
      <ul className="ul">
        <Link to='/' style={{ textDecoration: 'none' }} > <li>HOME </li></Link>
        <Link to='/profile' style={{ textDecoration: 'none' }} > <li>PROFILE </li></Link>
        <Link to='/about' style={{ textDecoration: 'none' }} > <li>ABOUT </li></Link>
      </ul>
    </div>
  );
}
export default Navabr;
