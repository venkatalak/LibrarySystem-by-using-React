import React from 'react';
import './TotalBooksPage.css';
import { Link } from 'react-router-dom';
/**
 * This is the helper Function used to the get Total Books available in the library
 * @returns ShowstotalBooksPage
 */

function TotalBooksPage() {

  return (
    <>
      <nav className="navstudentt">
        <a className="nav-looostudentt" href="aa">RGUKT IIIT</a>
        <ul className="nav-menuuustudentt">
          <li className="nav-itemmmstudentt">
            <a href="a" className="nav-linkkkstudentt"><Link to='/LibrarianOperationsPage'>Back</Link></a>
          </li>
        </ul>
      </nav>
      <div class="hellostudentt">
      <form id="studenttt">
        <h4> Get TotalBooks!</h4>
        <input class="buttonnn" type="submit" value="Get Books" />
      </form>
      </div>
      <div className="footer">
        @Copyright <a href="https://rguktn.ac.in/about/aboutrgukt/"> RGUKT </a> 2022- All Right Reserved.
      </div>

    </>
  )
}
export default TotalBooksPage;