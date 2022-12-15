import React from 'react';
import './DeleteBooksPage.css';
import { Link } from 'react-router-dom';
/**
 * This is the helper Function used to DeleteBooks 
 * @returns DeleteBooksPage
 */

function DeleteBooksPage() {

  return (
    <>
      <nav className="na">
        <a className="nav-log" href="aa">RGUKT IIIT</a>
        <ul className="nav-men">
          <li className="nav-ite">
            <a href="a" className="nav-lin"><Link to='/LibrarianOperationsPage'>LibrarianOperationsPage</Link></a>
          </li>
        </ul>
      </nav>
      <div class="hello">
      <form>
        <h4>Delete Books Here!</h4>
        <input name="sAuthUsername" type="text" id="sAuthUsername" size="20" maxlength="15" tabindex="100" autocomplete="off" placeholder="Enter BookName you want to delete" />
        <input name="sAuthPassword" type="password" id="sAuthPassword" size="20" maxlength="15" tabindex="110" autocomplete="off" placeholder="Enter BookId " />
        <input class="button" type="submit" value="Delete" />
      </form>
      </div>
      <div className="footer">
        @Copyright <a href="https://rguktn.ac.in/about/aboutrgukt/"> RGUKT </a> 2022- All Right Reserved.
      </div>

    </>
  )
}
export default DeleteBooksPage;