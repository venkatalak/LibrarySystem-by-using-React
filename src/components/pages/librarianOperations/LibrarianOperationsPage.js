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
          <li className="nav-it">
            <a href="a" className="nav-linku"><Link to='/AddBooksPage'>AddBooks</Link></a>
          </li>
          <li className="nav-it">
            <div className="nav-linku"><Link to='/DeleteBooksPage'>DeleteBooks</Link></div>
          </li>
          <li className="nav-it">
            <a href="a" className="nav-linku"><Link to='/gti'>AvailableBooks</Link></a>
          </li>
          
        </ul>
      </nav>
      <div className="introo">
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