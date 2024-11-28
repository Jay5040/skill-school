// AssignmentCard.jsx
import React from 'react';
import './AssignmentCard.scss';

const AssignmentCard = ({ title, dueDate, status, color }) => {
  return (
    <div className="assignment-card" style={{ borderColor: color }}>
      <h3>{title}</h3>
      <p className="due-date">Due: {dueDate}</p>
      <p className={`status ${color}`}>{status}</p>
    </div>
  );
};

export default AssignmentCard;
