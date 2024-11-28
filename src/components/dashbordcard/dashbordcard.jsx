import React from 'react';
import './dashbordcard.scss';

const DashboardCard = ({ title, value, growth, color }) => {
  return (
    <div className="dashboard-card" style={{ borderColor: color }}>
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <p className={`growth ${color}`}>{growth}</p>
    </div>
  );
};

export default DashboardCard;
