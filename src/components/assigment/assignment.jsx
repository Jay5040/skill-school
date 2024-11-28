import React from 'react';
import Sidebar from '../sidebar/sidebar';
import AssignmentCard from '../assigment/assignmentcard';
import './assignment.scss';

const assignments = [
  { title: 'React Basics', dueDate: '2024-12-01', status: 'Completed', color: 'green' },
  { title: 'Redux Advanced', dueDate: '2024-12-05', status: 'Pending', color: 'red' },
  { title: 'CSS Flexbox', dueDate: '2024-12-03', status: 'In Progress', color: 'orange' },
  { title: 'JavaScript Essentials', dueDate: '2024-12-07', status: 'Completed', color: 'green' },
  { title: 'TypeScript Deep Dive', dueDate: '2024-12-10', status: 'Pending', color: 'red' },
  { title: 'HTML5 and Semantic Markup', dueDate: '2024-12-02', status: 'Completed', color: 'green' },
  { title: 'Responsive Web Design', dueDate: '2024-12-08', status: 'In Progress', color: 'orange' },
  { title: 'Web Accessibility Fundamentals', dueDate: '2024-12-12', status: 'Pending', color: 'red' },
  { title: 'Node.js Introduction', dueDate: '2024-12-15', status: 'In Progress', color: 'orange' },
  { title: 'Express.js Basics', dueDate: '2024-12-18', status: 'Pending', color: 'red' },
];

const AssignmentPage = () => {
  return (
    <div className="assignment-page">
      <Sidebar />
      <div className="assignment-content">
        <h1>Assignments</h1>
        <div className="assignment-list">
          {assignments.map((assignment, index) => (
            <AssignmentCard key={index} {...assignment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
