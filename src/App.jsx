import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import LoginPage from './Pages/loginpage/loginpage';
import SignUpPage from './Pages/signuppage/signuppage';
import ContactPage from './Pages/contectpage/contactpage';
import AboutPage from './Pages/aboutpage/aboutpage';
import StudentDashboard from './Pages/dashboardpage/StudentDashboard';
import { AuthProvider } from './components/authentication/AuthContext'; // Import AuthProvider
import CourseCardPage from './Pages/coursecardpage/coursecardpage';
import AssignmentPage from './components/assigment/assignment';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/studentDashbrod" element={<StudentDashboard />} />
          <Route path="/courses" element={<CourseCardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Assignment" element={<AssignmentPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
