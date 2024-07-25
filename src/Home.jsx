/* eslint-disable react/prop-types */
// src/Home.jsx
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Home = ({ user }) => {
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
    </div>
  );
};

export default Home;
