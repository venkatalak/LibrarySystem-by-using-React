import React from "react";
import Footer from './files/common/footerpage';
/**
 * This is the helper fucntion to create Login page for the library system
 * @returns login page
 */
function Loginpage() {
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
      <><Footer /></>
    </div>
  )
}
export default Loginpage;