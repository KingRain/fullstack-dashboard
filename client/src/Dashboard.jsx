/* eslint-disable react/prop-types */
// src/Dashboard.jsx

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.email}</p>
    </div>
  );
};

export default Dashboard;
