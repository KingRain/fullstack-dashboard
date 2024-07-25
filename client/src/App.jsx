// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './App.css'

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';
import Sidebar from './Sidebar';

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
      {user && <Sidebar />}
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
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/settings" element={<Settings user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
