import React from "react";
import Footer from "./files/common/footerpage";
/**
 * This is the helper function to create contact page for the library system
 * @returns contact page
 */

function Contactpage() {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="nav-logo">RGUKT IIIT</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="" className="nav-link">Home</a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="row">
          <h1>contact us</h1>
        </div>
        <div className="row">
          <p>We'd love to hear from you!</p>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <input type="text" required />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required></textarea>
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>
      </div>
      <div> <Footer /></div>
    </div>
  )
}
export default Contactpage;