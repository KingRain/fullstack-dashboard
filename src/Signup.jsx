/* eslint-disable no-unused-vars */
// src/Signup.jsx
import { useState } from "react";
import "./index.css";
import "./Login.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Signup = ({ toggleAuthMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(
        "https://3fe9a4a9-55c7-4f90-8001-4d8c009464cb-00-vscagrn4djlw.worf.replit.dev/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setSuccess("Signup successful! Redirecting to login...");
        //navigate('/login');
        setTimeout(() => {
          toggleAuthMode();
        }, 2000);
      } else {
        setError(data.message);
        setSuccess("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="main-container">
      <h1>Signup.</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?{" "}
        <button className="signup-btn" onClick={toggleAuthMode}>
          Log in
        </button>
      </p>
    </div>
  );
};

export default Signup;
