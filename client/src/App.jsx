// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (email) => {
    setUser({ email });
    navigate('/home');
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={isLogin ? (
            <Login onLogin={handleLogin} toggleAuthMode={toggleAuthMode} />
          ) : (
            <Signup toggleAuthMode={toggleAuthMode} />
          )}
        />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
