import React from 'react';
import './About.css';
import img from './OIP.jpg'
/**
 * This is the helper fucntion to create about page of library system
 * @returns 
 */

function Aboutpage() {
  return (
    <div>
      <nav className="navbar">
        <a className="nav-logo" href="about.html">RGUKT IIIT</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="a" className="nav-link">Home</a>
          </li>
        </ul>
      </nav>
      <section className="about-us">
        <div className="about">
          <img src={img} className="pic" alt="picchidi" />
          <div className="text">
            <h2>About </h2>
            <h5>Smart Library<span>@RGUKT IIIT</span></h5>
            <p>This website gives you to that the which books available in the library and you can also read those books in this website also to save your time.you can save your time.</p>
          </div>
        </div>
      </section>
      <div className="footer">
        @Copyright <a href="abcd.html"> RGUKT </a> 2022- All Right Reserved.
      </div>
    </div>
  )
}
export default Aboutpage;