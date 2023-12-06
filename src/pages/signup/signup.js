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

  const [userData, setUserData] = useState(initialUserData);

  const handleUserInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { username, password } = userData;
    e.preventDefault();

    // Check is empty
    if (Object.values(userData).some((item) => item === "")) {
      console.log("Input data is not complete");
      return;
    }
    if (userData.confirmPassword !== userData.password) {
      alert("Confirm password doesn't match!");
      return;
    }
    instance
      .post("http://amanimagdi.pythonanywhere.com/users/", {
        username,
        password,
      })
      .then((res) => {
        // Clear data
        setUserData(initialUserData);
        console.log("Profile created successfully");
        navigate("/login");
      })
      .catch((err) => {
      alert(`Error creating profile: ${err.message}`);
      });
  };

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit} className="form1">
        <h1>Signup</h1>
        <input
          className="sign-input"
          type="email"
          id="email"
          name="username"
          placeholder="Email"
          value={userData.username}
          onChange={handleUserInput}
        />
        <input
          className="sign-input"
          type="password"
          id="password"
          name="password"
          placeholder="Create Password"
          value={userData.password}
          onChange={handleUserInput}
        />
        <input
          className="sign-input"
          type="password"
          id="confirm-password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={userData.confirmPassword}
          onChange={handleUserInput}
        />
        <button type="submit" id="submit-btn">
          Sign up
        </button>
        <p>
          <small>
            Already have an account?<Link to="/login"> Login</Link>
          </small>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
