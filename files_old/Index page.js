import React from 'react';
import Footer from './files/common/footerpage';
/**
 * This is the helper function to create Index page for Library system
 * @returns Index page
 */
function Indexpage() {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="nav-logo">RGUKT IIIT</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">Profile</a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <img src="" id="hp" />
      </div>
      <h1>Welcome to RGUKT Library</h1>
      <button type="login" align="center"><a href="login.html">Login</a>
      </button>
      <div><Footer /></div>
    </div>

  );

}
export default Indexpage;