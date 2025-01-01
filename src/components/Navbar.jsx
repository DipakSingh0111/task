// src/components/Navbar.js
// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="horizontal-navbar">
            <ul className="nav-links">     
                <li><Link to="/">Student Registrations</Link></li>
                <li><Link to="/course-types">Course Types</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/course-offerings">Course Offerings</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
