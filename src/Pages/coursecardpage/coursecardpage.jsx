import React from 'react';
import CourseCard from '../../components/coursecard/coursecard';
import './coursecardpage';

const CoursesPage = () => {
  const courses = [
    {
      number: "01",
      title: "Introduction to UI/UX Design",
      lessons: [
        {
          title: "Understanding UI/UX Design Principles",
          lessonNumber: "Lesson 01",
          duration: "45 Minutes",
        },
        {
          title: "Importance of User-Centered Design",
          lessonNumber: "Lesson 02",
          duration: "1 Hour",
          highlight: true,
        },
        {
          title: "The Role of UI/UX Design in Product Development",
          lessonNumber: "Lesson 03",
          duration: "45 Minutes",
        },
      ],
    },
    {
      number: "02",
      title: "Advanced UI/UX Techniques",
      lessons: [
        {
          title: "Prototyping Techniques",
          lessonNumber: "Lesson 01",
          duration: "1 Hour",
        },
        {
          title: "Design System Creation",
          lessonNumber: "Lesson 02",
          duration: "1.5 Hours",
        },
        {
          title: "Usability Testing",
          lessonNumber: "Lesson 03",
          duration: "50 Minutes",
        },
      ],
    },
    {
      number: "03",
      title: "Web Development Basics",
      lessons: [
        {
          title: "HTML Essentials",
          lessonNumber: "Lesson 01",
          duration: "30 Minutes",
        },
        {
          title: "CSS Fundamentals",
          lessonNumber: "Lesson 02",
          duration: "45 Minutes",
        },
        {
          title: "JavaScript Basics",
          lessonNumber: "Lesson 03",
          duration: "1 Hour",
        },
      ],
    },
    {
      number: "04",
      title: "React for Beginners",
      lessons: [
        {
          title: "Introduction to React",
          lessonNumber: "Lesson 01",
          duration: "40 Minutes",
        },
        {
          title: "Building Components",
          lessonNumber: "Lesson 02",
          duration: "50 Minutes",
        },
        {
          title: "State and Props in React",
          lessonNumber: "Lesson 03",
          duration: "1 Hour",
        },
      ],
    },
    {
      number: "05",
      title: "Full Stack Development",
      lessons: [
        {
          title: "Introduction to Backend Development",
          lessonNumber: "Lesson 01",
          duration: "1 Hour",
        },
        {
          title: "Working with APIs",
          lessonNumber: "Lesson 02",
          duration: "1.5 Hours",
        },
        {
          title: "Deploying Full-Stack Applications",
          lessonNumber: "Lesson 03",
          duration: "2 Hours",
        },
      ],
    },
    {
      number: "06",
      title: "Data Analysis with Python",
      lessons: [
        {
          title: "Python for Data Analysis",
          lessonNumber: "Lesson 01",
          duration: "1 Hour",
        },
        {
          title: "Working with Pandas",
          lessonNumber: "Lesson 02",
          duration: "1.5 Hours",
        },
        {
          title: "Data Visualization Techniques",
          lessonNumber: "Lesson 03",
          duration: "1 Hour",
        },
      ],
    },
  ];

  return (
    <div className="courses-page">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Courses</h1>
      <div className="courses-list">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            number={course.number}
            title={course.title}
            lessons={course.lessons}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
