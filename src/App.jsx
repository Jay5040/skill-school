import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import LoginPage from './Pages/loginpage/loginpage';
import SignUpPage from './Pages/signuppage/signuppage';
import ContactPage from './Pages/contectpage/contactpage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
