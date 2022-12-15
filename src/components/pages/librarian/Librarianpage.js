import { useState } from "react";
import React from "react";
import './Librarianpage.css';
import { Link } from "react-router-dom";

/**
 * This is the helper fucntion to create Login page for librarian to login the library system
 * @returns login page
 */
function Librarianpage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formErrors, setFormErrors] = useState("")

  const handleInput = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value)
        break;
      case "password":
        setPassword(event.target.value)
        break;
      default:
      // code block
    }
  }
  const validate = (email, password) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      errors.email = "Email is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }
    if (password.length===0) {
      errors.password = "Password is required";
    } else if (password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  }
  const handleSubmit = (event) => {
    setFormErrors(validate(email, password))
    // console.log(formErrors)
    event.preventDefault()
  }

  return (
    <div>
      <div className="wrapperrr">
        <div className="inner-warpper text-centerrr">
          <h2 className="titleee">Librarian Login</h2>
          <form action="" id="formvalidateee">
            <div className="input-grouppp">
              <input className="form-controlll" name="email" id="email" type="text" placeholder="Enter your email" onChange={handleInput}/>
              <span className="lighting"></span>
              <div className="errorrr">{formErrors.email}</div>
            </div>
            <div className="input-grouppp">
              <input className="form-controlll" name="userPassword" id="userPassword" type="password" placeholder="Enter your password" onChange={handleInput} />
              <span className="lighting"></span>
              <div className="errorrr">{formErrors.password}</div>
            </div>

            <button type="submit" id="login"  onClick={handleSubmit}><Link to='/LibrarianOperationsPage'>Login</Link></button>
            <div className="clearfixxx supporterrr">
              <div className="pull-left remember-meee">
                <input id="rememberMeee" type="checkbox" />
                <label for="rememberMe">Remember Me</label>
              </div>
              <a className="forgot pull-righttt" href="a"><Link to='/forget'>Forgot Password?</Link></a>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}
export default Librarianpage;