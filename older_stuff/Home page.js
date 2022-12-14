import React from "react";

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
      <div class="intro">
        <h2>Smart Library</h2>
        <p>Reading is dreaming with open eyes.</p>
      </div>
      <div class="footer">
    @Copyright <a> RGUKT </a> 2022- All Right Reserved.
  </div>
    </div>
  )

}
export default Homepage;