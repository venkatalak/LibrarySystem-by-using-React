
import React from "react";
import './Loginpage.css';
import { Link } from "react-router-dom";

/**
 * This is the helper fucntion to create Login page for the library system
 * @returns login page
 */
function Loginpage() {

  return (
    <div>
      <div class="hello">
        <form>
          <h4>Login</h4>
          <input name="sAuthUsername" type="text" id="sAuthUsername"  size="20" maxlength="15" tabindex="100" autocomplete="off" placeholder="Enter UserId"/>
          <div id="phoneMsg"></div><br></br>
          <input name="sAuthPassword" type="password" id="sAuthPassword"  size="20" maxlength="15" tabindex="110" autocomplete="off" placeholder="Enter Password"/>
          <button  class="buttonbooks" type="submit" value="Add"/> <Link to='/Home'>Add</Link>
        </form>
      </div>
  </div>

  )
}
export default Loginpage;