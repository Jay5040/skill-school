import React, { useState } from "react";
import "./TeacherDashboard.scss";

// Screens
const DashboardScreen = () => (
  <div className="dashboard-screen">
    <h1>Welcome Back, Teacher!</h1>
    <p>Here’s your progress overview.</p>
    <div className="dashboard-cards">
      <div className="card">Topic Progress</div>
      <div className="card">Course Progress</div>
      <div className="card">Assignment Progress</div>
      <div className="card">Quiz Progress</div>
    </div>
    <div className="popular-courses">
      <h2>Most Popular Courses</h2>
      <p>Display the most popular courses here...</p>
    </div>
  </div>
);

const CourseScreen = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: "", description: "", category: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (newCourse.name && newCourse.description && newCourse.category) {
      setCourses((prev) => [...prev, newCourse]);
      setNewCourse({ name: "", description: "", category: "" });
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="course-screen">
      <h1>Manage Courses</h1>
      <form className="add-course-form" onSubmit={handleAddCourse}>
        <h2>Add New Course</h2>
        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            name="name"
            value={newCourse.name}
            onChange={handleInputChange}
            placeholder="Enter course name"
          />
        </div>
        <div className="form-group">
          <label>Course Description</label>
          <textarea
            name="description"
            value={newCourse.description}
            onChange={handleInputChange}
            placeholder="Enter course description"
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={newCourse.category}
            onChange={handleInputChange}
            placeholder="Enter course category"
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
      <div className="course-list">
        <h2>Course List</h2>
        {courses.length > 0 ? (
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <span>Category: {course.category}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No courses added yet.</p>
        )}
      </div>
    </div>
  );
};

const StudentScreen = () => {
  const students = [
    { id: 1, name: "John Doe", course: "Math 101" },
    { id: 2, name: "Jane Smith", course: "Science 101" },
    { id: 3, name: "Alex Johnson", course: "History 101" },
  ];

  return (
    <div className="student-screen">
      <h1>Enrolled Students</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProfileScreen = () => {
  const teacherProfile = {
    name: "Aron Smith",
    email: "aron.smith@example.com",
    contact: "+123 456 789",
  };

  return (
    <div className="profile-screen">
      <h1>Teacher Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {teacherProfile.name}</p>
        <p><strong>Email:</strong> {teacherProfile.email}</p>
        <p><strong>Contact:</strong> {teacherProfile.contact}</p>
      </div>
    </div>
  );
};

// Main Component
const TeacherDashboard = () => {
  const [currentScreen, setCurrentScreen] = useState("dashboard");

  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return <DashboardScreen />;
      case "courses":
        return <CourseScreen />;
      case "students":
        return <StudentScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div className="teacher-dashboard">
      <aside className="sidebar">
        <h2>Skill School</h2>
        <nav>
          <ul>
            <li onClick={() => setCurrentScreen("dashboard")}>Dashboard</li>
            <li onClick={() => setCurrentScreen("courses")}>Courses</li>
            <li onClick={() => setCurrentScreen("students")}>Students</li>
            <li onClick={() => setCurrentScreen("profile")}>Profile</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">{renderScreen()}</main>
    </div>
  );
};

export default TeacherDashboard;

