import React from "react";
import './Contactpage.css';
import { Link } from "react-router-dom";
/**
 * This is the helper function to create contact page for the library system
 * @returns contact page
 */

function Contactpage() {
  return (
    <div>
      <nav className="navbarcontact">
        <a className="nav-logocontact" href="abcd.html">RGUKT IIIT</a>
        <ul className="nav-menucontact">
          <li className="nav-itemcontact">
            <a className="nav-linkcontact" href="a"><Link to='/Home'>Home</Link></a>
          </li>
        </ul>
      </nav>
      <div class="helloo">
      <div class="containercontact">
        <form id="contactcontact" action="" method="post">
          <h3> Contact Us</h3>
          <h4>We'd love to hear from you!</h4>
          <fieldset>
            <input placeholder="Your name" type="text" tabindex="1" required autofocus />
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabindex="2" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
          </fieldset>
           <fieldset>
            <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
          </fieldset> 
          <fieldset>
            <button name="submit" type="submit" id="contact-submitcontact" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>
      </div>
      </div>
      <div className="footer">
        @Copyright <a href="https://rguktn.ac.in/about/aboutrgukt/"> RGUKT </a> 2022- All Right Reserved.
      </div>
    </div>
  )
}
export default Contactpage;