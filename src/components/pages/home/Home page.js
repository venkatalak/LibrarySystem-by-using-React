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
            <a href="a" className="nav-link"><Link to='/about'>About</Link></a>
          </li>
          <li className="nav-item">
            <div className="nav-link"><Link to='/branches'>Branches</Link></div>
          </li>
          <li className="nav-item">
            <a href="a" className="nav-link"><Link to='/contact'>Contact</Link></a>
          </li>
          
        </ul>
      </nav>
      <div className="intro">
        <h2>Smart Library</h2>
        <p>Reading is dreaming with open eyes.</p>
      </div>
      <div className="footer">
    @Copyright <a href="https://rguktn.ac.in/about/aboutrgukt/"> RGUKT </a> 2022- All Right Reserved.
  </div>
    </div>
  )

}
export default Homepage;