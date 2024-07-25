/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// src/Sidebar.jsx
import { Link,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTachometerAlt,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ onLogout}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };


  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FontAwesomeIcon icon={faCog} /> Settings
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
