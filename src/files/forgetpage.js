import React from 'react';
import './forgetpage.css';
import { useState } from 'react';

/**
 * This is the helper Function used to create forget page 
 * @returns Forget page 
 */

function Forgetpage() {

  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [formErrors, setFormErrors] = useState("")

  const handleInput = (event) => {
    switch (event.target.name) {
      case "password":
        setPassword(event.target.value)
        break;
      case "password-confirmation":
        setRepeatPassword(event.target.value)
        break;
      default:
      // code block
    }
  }
  const validate = (password, repeatPassword) => {
    const errors = {}
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!repeatPassword) {
      errors.repeatPassword = "Confirm password is required";
    }
    else if (repeatPassword !== password) {
      errors.repeatPassword = "confirm password not matched";
    }
    return errors;
  }

  const handleSubmit = (event) => {

    setFormErrors(validate(password, repeatPassword))
    // console.log(validate(username).username)
    event.preventDefault()
  }
  return (
    <>
      <div className="wrapper">
        <div className="inner-warpper text-center">
          <h2 className="title">Forget Password</h2>
          <form action="" id="formvalidate" />
          <div className="input-group">
            <input className="form-control" name="new password" id="userName" type="text" placeholder="Enter New password" onChange={handleInput} />
            <div className="error">{formErrors.password}</div>
            {/* <span className="lighting"></span> */}
          </div>
          <div className="input-group">
            <input className="form-control" name="confirm password" id="userPassword" type=" confirm password" placeholder="Enter confirm password" onChange={handleInput} />
            <div className="error">{formErrors.repeatPassword}</div>
            {/* <span className="lighting"></span> */}
          </div>

          <button type="submit" id="login" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}
export default Forgetpage;