/* eslint-disable no-unused-vars */
// src/Signup.jsx
import { useState } from 'react';
import './index.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Signup = ({ toggleAuthMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        setSuccess('Signup successful! Redirecting to login...');
        //navigate('/login');
        setTimeout(() => {
          toggleAuthMode();
        }, 2000);
      } else {
        setError(data.message);
        setSuccess('');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className='main-container'>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?{' '}
        <button className='signup-btn' onClick={toggleAuthMode}>
          Log in
        </button>
      </p>
    </div>
  );
};

export default Signup;
