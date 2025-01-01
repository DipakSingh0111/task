import { useState } from "react";
// import "../App.css";

const Courses = () => {
    const [courses, setCourses] = useState([]); // State for storing the list of courses
    const [courseName, setCourseName] = useState(""); // State for the input field
    const [editingIndex, setEditingIndex] = useState(null); // State for editing

    const handleAddCourse = () => {
        if (courseName.trim() === "") {
            alert("Course name cannot be empty!");
            return;
        }

        if (editingIndex !== null) {
            // Update the course at the editing index
            const updatedCourses = [...courses];
            updatedCourses[editingIndex] = courseName;
            setCourses(updatedCourses);
            setEditingIndex(null); // Clear editing index
        } else {
            // Add a new course
            setCourses([...courses, courseName]);
        }

        setCourseName(""); // Clear input field
    };

    const handleEditCourse = (index) => {
        setCourseName(courses[index]);
        setEditingIndex(index);
    };

    const handleDeleteCourse = (index) => {
        const updatedCourses = courses.filter((_, i) => i !== index);
        setCourses(updatedCourses);
    };

    return (
        <div className="courses">
            <h2>Courses</h2>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Enter course name"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAddCourse}>
                    {editingIndex !== null ? "Update Course" : "Add Course"}
                </button>
            </div>
            {courses.length > 0 ? (
                <table className="courses-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{course}</td>
                                <td>
                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => handleEditCourse(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDeleteCourse(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No courses available. Please add some courses!</p>
            )}
        </div>
    );
};

export default Courses;
