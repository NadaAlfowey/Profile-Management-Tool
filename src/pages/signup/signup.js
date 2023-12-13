import React, { useState } from "react";
import "./signup.css";
import instance from "../../interceptors/interceptors";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const initialUserData = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  // State to manage user input data
  const [userData, setUserData] = useState(initialUserData);

  // Handle user input change
  const handleUserInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    const { username, password } = userData;
    e.preventDefault();

    // Check if any input field is empty
    if (Object.values(userData).some((item) => item === "")) {
      console.log("Input data is not complete");
      return;
    }

    // Check if password and confirm password match
    if (userData.confirmPassword !== userData.password) {
      alert("Confirm password doesn't match!");
      return;
    }

    // Make API call to create a new user profile
    instance
      .post("users/", {
        username,
        password,
      })
      .then((res) => {
        // Clear input data after successful profile creation
        setUserData(initialUserData);
        console.log("Profile created successfully");
        // Redirect to login page
        navigate("/login");
      })
      .catch((err) => {
        // Handle and display error message
        alert(`Error creating profile: ${err.message}`);
      });
  };

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit} className="form1">
        <h1>Signup</h1>
        {/* Email input field */}
        <input
          className="sign-input"
          type="input"
          id="email"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleUserInput}
        />
        {/* Password input field */}
        <input
          className="sign-input"
          type="password"
          id="password"
          name="password"
          placeholder="Create Password"
          value={userData.password}
          onChange={handleUserInput}
        />
        {/* Confirm password input field */}
        <input
          className="sign-input"
          type="password"
          id="confirm-password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={userData.confirmPassword}
          onChange={handleUserInput}
        />
        {/* Submit button */}
        <button type="submit" id="submit-btn">
          Sign up
        </button>
        <p>
          <small>
            {/* Link to login page */}
            Already have an account?<Link to="/login"> Login</Link>
          </small>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
