import React from 'react';
import './AvailableBooksPage.css';
import { Link } from 'react-router-dom';
/**
 * This is the helper Function used to DeleteBooks 
 * @returns DeleteBooksPage
 */

function AvailableBooksPage() {

  return (
    <>
      <nav className="navvv">
        <a className="nav-looo" href="aa">RGUKT IIIT</a>
        <ul className="nav-menuuu">
          <li className="nav-itemmm">
            <a href="a" className="nav-linkkk"><Link to='/LibrarianOperationsPage'>Back</Link></a>
          </li>
        </ul>
      </nav>
      <div class="hello">
      <form>
        <h4>Check Book Availabity!</h4>
        <input name="sAuthUsername" type="text" id="sAuthUsername" size="20" maxlength="15" tabindex="100" autocomplete="off" placeholder="Enter BookName" />
    
        <input class="button" type="submit" value="Submit" />
      </form>
      </div>
      <div className="footer">
        @Copyright <a href="https://rguktn.ac.in/about/aboutrgukt/"> RGUKT </a> 2022- All Right Reserved.
      </div>

    </>
  )
}
export default AvailableBooksPage;