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
      <header class="header">
        <a href="a" class="logo">RGUKTIIIT</a>
        <nav class="nav-items">
          <a href="a"><Link to='/about'>About</Link></a>
        </nav>
      </header>
      <div class="intro">
        <h1>Welcome to RGUKT IIIT Library</h1>
        <p>You Can Explore More Books here!!</p>
        <button class="but"><Link to="/login">Login</Link></button>
      </div>
      <div className="footer">
    @Copyright <a href="abcd.html"> RGUKT </a> 2022- All Right Reserved.
  </div>
    </>
  );

}
export default Indexpage;