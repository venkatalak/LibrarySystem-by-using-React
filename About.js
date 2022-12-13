import React from 'react';
import img from './OIP.jpg'
/**
 * This is the helper fucntion to create about page of library system
 * @returns 
 */

function Aboutpage() {
  return (
    <div>
      <nav className="navbar">
        <a className="nav-logo">RGUKT IIIT</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a className="nav-link">Home</a>
          </li>
        </ul>
      </nav>
      <section class="about-us">
        <div class="about">
          <img src={img} class="pic" />
          <div class="text">
            <h2>About </h2>
            <h5>Smart Library<span>@RGUKT IIIT</span></h5>
            <p>This website gives you to that the which books available in the library and you can also read those books in this website also to save your time.you can save your time.</p>
          </div>
        </div>
      </section>
      <div class="footer">
        @Copyright <a> RGUKT </a> 2022- All Right Reserved.
      </div>
    </div>
  )
}
export default Aboutpage;