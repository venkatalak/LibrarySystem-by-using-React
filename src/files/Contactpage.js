import React from "react";
import './Contactpage.css';
/**
 * This is the helper function to create contact page for the library system
 * @returns contact page
 */

function Contactpage() {
  return (
    <div>
      <nav className="navbar">
        <a className="nav-logo" href="abcd.html">RGUKT IIIT</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a className="nav-link" href="abcd.html">Home</a>
          </li>
        </ul>
      </nav>
      <div class="container">
        <form id="contact" action="" method="post">
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
            <input placeholder="Subject or book name" type="url" tabindex="4" required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
export default Contactpage;