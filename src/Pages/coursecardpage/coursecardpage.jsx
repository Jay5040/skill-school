import React, { useEffect, useState } from 'react';
import CourseCard from '../../components/coursecard/coursecard';
import './coursecardpage';

import { collection, getDocs } from "@firebase/firestore";
import db from '../../../firebase'; 

const CourseCardPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCoursesFromFirestore = async () => {
    try {
      const coursesCollection = collection(db, "courses"); 
      const snapshot = await getDocs(coursesCollection); 

      const coursesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCourses(coursesData); 
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching courses:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoursesFromFirestore(); 
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: 'center' }}>Loading courses</h2>; 
  }

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

export default CourseCardPage;
