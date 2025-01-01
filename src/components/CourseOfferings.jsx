// src/components/CourseOfferings.js
import { useState } from "react";

const CourseOfferings = () => {
    const [courses, setCourses] = useState(["Hindi", "English", "Urdu"]);
    const [courseTypes, setCourseTypes] = useState(["Individual", "Group", "Special"]);
    const [offerings, setOfferings] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedCourseType, setSelectedCourseType] = useState("");

    const handleAddOffering = () => {
        if (selectedCourse && selectedCourseType) {
            const newOffering = `${selectedCourseType} - ${selectedCourse}`;
            setOfferings([...offerings, newOffering]);
            setSelectedCourse("");
            setSelectedCourseType("");
        }
    };

    const handleDeleteOffering = (index) => {
        setOfferings(offerings.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Course Offerings</h2>
            <div>
                <select
                    value={selectedCourseType}
                    onChange={(e) => setSelectedCourseType(e.target.value)}
                >
                    <option value="">Select Course Type</option>
                    {courseTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                >
                    <option value="">Select Course</option>
                    {courses.map((course, index) => (
                        <option key={index} value={course}>
                            {course}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddOffering}>Add Offering</button>
            </div>
            <ul>
                {offerings.map((offering, index) => (
                    <li key={index}>
                        {offering}
                        <button onClick={() => handleDeleteOffering(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseOfferings;
