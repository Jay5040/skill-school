import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import LoginPage from './Pages/loginpage/loginpage';
import SignUpPage from './Pages/signuppage/signuppage';
import ContactPage from './Pages/contectpage/contactpage';
import TeacherDashboard from './Pages/dashboardpage/TeacherDashboard';
import AboutPage from './Pages/aboutpage/aboutpage';
import CoursesPage from './Pages/coursecardpage/coursecardpage';
import { AuthProvider } from './components/authentication/AuthContext'; // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard/TeacherDashboard" element={<TeacherDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
