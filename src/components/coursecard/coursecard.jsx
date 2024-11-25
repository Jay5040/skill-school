import React from 'react';
import './coursecard.scss';

const CourseCard = ({ number, title, lessons }) => {
  return (
    <div className="course-card">
      {/* Course Header */}
      <div className="course-card-header">
        <h1>{number}</h1>
        <h2>{title}</h2>
      </div>

      {/* Lessons */}
      <div className="course-lessons">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={`lesson-item ${lesson.highlight ? 'highlight' : ''}`}
          >
            <div className="lesson-info">
              <h3>{lesson.title}</h3>
              <p>{lesson.lessonNumber}</p>
            </div>
            <div className="lesson-duration">
              <span className="icon">⏱️</span>
              <span>{lesson.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
