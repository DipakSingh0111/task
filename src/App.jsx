// src/App.js
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseTypes from "./components/CourseTypes";
import Courses from "./components/Courses";
import CourseOfferings from "./components/CourseOfferings";
import StudentRegistrations from "./components/StudentRegistrations";
import './App.css';

const App = () => {
    return (
      <>
        <Router>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<StudentRegistrations />} />
                <Route path="/course-types" element={<CourseTypes />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course-offerings" element={<CourseOfferings />} />
            </Routes>
        </Router>
        
        </>
    );
};

export default App;
