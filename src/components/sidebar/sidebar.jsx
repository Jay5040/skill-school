// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Assignment">Assignments</Link></li> 
        <li><Link to="/dashboard/settings">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
