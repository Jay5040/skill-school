// src/components/studentcard/StudentCard.jsx
import React from 'react';
import './studentcard.scss';

const StudentCard = ({ name, courses }) => {
  return (
    <div className="student-card">
      <h2>{name}'s Courses</h2>
      <div className="course-stats">
        {courses.map((course, index) => (
          <div key={index} className="course-card" style={{ borderColor: course.color }}>
            <h3>{course.title}</h3>
            <p className="course-value">{course.value}</p>
            <p className={`growth ${course.color}`}>{course.growth}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
