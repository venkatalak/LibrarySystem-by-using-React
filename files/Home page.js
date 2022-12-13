import React from "react";
import Footer from "./files/common/footerpage";
/**
 * This is the helper function to create Home page for the library system
 * @returns Home page
 */
function Homepage() {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="nav-logo">RGUKT IIIT</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="about.html" className="nav-link">About</a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">Branches</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Profile</a>
          </li>
        </ul>

      </nav>
      <div><Footer/></div>
    </div>
  )

}
export default Homepage;