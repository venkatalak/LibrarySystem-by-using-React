import React from "react";
import './Home page.css';
import { Link } from "react-router-dom";
/**
 * This is the helper function to create Home page for the library system
 * @returns Home page
 */
function Homepage() {
  return (
    <div>
      <nav className="navbar">
        <a href="a" className="nav-logo">RGUKT IIIT</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="a" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <div className="nav-link"><Link to='/Branches'>Branches</Link></div>
          </li>
          <li className="nav-item">
            <a href="a" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="a" className="nav-link">Profile</a>
          </li>
        </ul>
      </nav>
      <div className="intro">
        <h2>Smart Library</h2>
        <p>Reading is dreaming with open eyes.</p>
      </div>
      <div className="footer">
    @Copyright <a href="abcd.html"> RGUKT </a> 2022- All Right Reserved.
  </div>
    </div>
  )

}
export default Homepage;