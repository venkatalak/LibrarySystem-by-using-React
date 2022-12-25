import React from 'react';
import './Index page.css';
import { Link } from 'react-router-dom';
/**
 * This is the helper function to create Index page for Library system
 * @returns Index page
 */
function Indexpage() {
  return (
    <>
      <header class="headerpart">
        <a href="a" class="logo">RGUKTIIIT</a>
        <nav class="nav-items">
          <a href="a"><Link to='/about'>About</Link></a>
          <a href="a"><Link to='/Librarian'>Librarian_login</Link></a>
        </nav>
      </header>
      <div class="intro">
        <h1>Welcome to RGUKT IIIT Library</h1>
        <p>You Can Check Available Books here!!</p>
        <button class="but"><Link to="/login">Student/Teacher Login</Link></button>
      </div>
      <div className="footer">
    @Copyright <a href="https://rguktn.ac.in/about/aboutrgukt/"> RGUKT </a> 2022- All Right Reserved.
  </div>
    </>
  );

}
export default Indexpage;