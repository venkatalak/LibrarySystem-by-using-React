import React from 'react';
import './About.css';
import img from '../../../images/OIP.jpg'
import { Link } from 'react-router-dom/dist';
/**
 * This is the helper fucntion to create about page of library system
 * @returns 
 */

function Aboutpage() {
  return (
    <div>
      <nav className="navbarabout">
        <a className="nav-logoabout" href="about.html">RGUKT IIIT</a>
        <ul className="nav-menuabout">
          <li className="nav-itemabout">
            <a href="a" className="nav-linkabout"><Link to='/Home'>Home</Link></a>
          </li>
        </ul>
      </nav>
      <section className="about-usabout">
        <div className="aboutabout">
          <img src={img} className="picabout" alt="picchidi" />
          <div className="textabout">
            <h2>About </h2>
            <h5>Smart Library<span>@RGUKT IIIT</span></h5>
            <p>This website gives you to that the which books available in the library .This Website helps you to save your time.</p>
          </div>
        </div>
      </section>
      <div className="footer">
        @Copyright <a href="https://rguktn.ac.in/about/aboutrgukt/"> RGUKT </a> 2022- All Right Reserved.
      </div>
    </div>
  )
}
export default Aboutpage;