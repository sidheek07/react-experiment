import React from "react";
import "./form.css";        

function Form() {
  return (
    <div className="form">
      <div className="container-form">
        <center>
          <h1>Registeration Form</h1>
        </center>
        <hr />
        <label>
          <b>Name :</b>
        </label>
        <input type="text" placeholder="Name" size="10" name="name" />

        <div>
          <label>
            <b>Gender :</b>
          </label>
          <br />
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>

        <label>
          <b>Phone :</b>
        </label>
        <input type="text" placeholder="phone no." size="10" name="phone" />

        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" />

        <label for="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="psw" />

        <button type="submit" class="registerbtn">
          SUBMIT
        </button>
      </div>
    </div>
  );
}
 
export default Form;