import { useState } from "react";
import React from "react";
import './Loginpage.css';

/**
 * This is the helper fucntion to create Login page for the library system
 * @returns login page
 */
function Loginpage() {
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
      <div className="wrapper">
        <div className="inner-warpper text-center">
          <h2 className="title">Login to your account</h2>
          <form action="" id="formvalidate">
            <div className="input-group">
              <input className="form-control" name="email" id="email" type="text" placeholder="Enter your email" onChange={handleInput}/>
              <span className="lighting"></span>
              <div className="error">{formErrors.email}</div>
            </div>
            <div className="input-group">
              <input className="form-control" name="userPassword" id="userPassword" type="password" placeholder="Enter your password" onChange={handleInput} />
              <span className="lighting"></span>
              <div className="error">{formErrors.password}</div>
            </div>

            <button type="submit" id="login"  onClick={handleSubmit}>Login</button>
            <div className="clearfix supporter">
              <div className="pull-left remember-me">
                <input id="rememberMe" type="checkbox" />
                <label for="rememberMe">Remember Me</label>
              </div>
              <a className="forgot pull-right" href="a">Forgot Password?</a>
            </div>
          </form>
        </div>
        <div className="signup-wrapper text-center">
          <a href="a">Don't have an accout? <span className="text-primary">Create One</span></a>
        </div>
      </div>


    </div>
  )
}
export default Loginpage;