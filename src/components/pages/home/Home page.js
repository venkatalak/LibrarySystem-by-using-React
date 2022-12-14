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
        <a href="a" className="nav-logo"><Link to='/'>RGUKT IIIT</Link></a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="a" className="nav-link"><Link to='/about'>about</Link></a>
          </li>
          <li className="nav-item">
            <div className="nav-link"><Link to='/branches'>Branches</Link></div>
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