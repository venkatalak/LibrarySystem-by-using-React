import React from "react";
import './LibrarianOperationsPage.css';
import { Link } from "react-router-dom";
/**
 * This is the helper function to create a home page for librarian to do operations
 * @returns Home page
 */
function LibrarianOperationsPage() {
  return (
    <div>
      <nav className="navbar">
        <a href="a" className="nav-logo">RGUKTIIIT</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="a" className="nav-link"><Link to='/about'>AddBooks</Link></a>
          </li>
          <li className="nav-item">
            <div className="nav-link"><Link to='/branches'>DeleteBooks</Link></div>
          </li>
          <li className="nav-item">
            <a href="a" className="nav-link"><Link to='/'>AvailableBooks</Link></a>
          </li>
          
        </ul>
      </nav>
      <div className="intro">
        <h2>Smart Library</h2>
        <p>Reading is dreaming with open eyes.</p>
      </div>
      <div className="footer">
    @Copyright <a href="https://rguktn.ac.in/about/aboutrgukt/"> RGUKT </a> 2022- All Right Reserved.
  </div>
    </div>
  )

}
export default LibrarianOperationsPage;