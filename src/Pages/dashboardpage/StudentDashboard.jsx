// src/pages/studentdashboard/StudentDashboard.jsx
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import DashboardCard from '../../components/dashbordcard/dashbordcard';
import StudentCard from '../../components/studentcard/studentcard';
import './StudentDashboard.scss';

const StudentDashboard = () => {
  const stats = [
    { title: 'Enrolled Courses', value: '8', growth: '10%', color: 'green' },
    { title: 'Completed Assignments', value: '45', growth: '5%', color: 'green' },
    { title: 'Overall Grade', value: 'A-', growth: '1%', color: 'green' },
    { title: 'Pending Tasks', value: '3', growth: '-1%', color: 'red' },
  ];

  const courses = [
    { title: 'Course 1', value: 'Intro to React', growth: '95%', color: 'green' },
    { title: 'Course 2', value: 'Advanced CSS', growth: '85%', color: 'green' },
    { title: 'Course 3', value: 'JavaScript Basics', growth: '75%', color: 'green' },
    { title: 'Course 4', value: 'Backend Development', growth: '50%', color: 'red' },
  ];

  return (
    <div className="student-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <StudentCard name="Jay Navadiya" courses={courses} />
        <h1>Student Dashboard</h1>
        <div className="dashboard-stats">
          {stats.map((stat, index) => (
            <DashboardCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
