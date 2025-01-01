// src/components/CourseTypes.js
import { useState } from "react";

const CourseTypes = () => {
    const [courseTypes, setCourseTypes] = useState([]);
    const [newType, setNewType] = useState("");

    const handleAddType = () => {
        if (newType) {
            setCourseTypes([...courseTypes, newType]);
            setNewType("");
        }
    };

    const handleDeleteType = (index) => {
        setCourseTypes(courseTypes.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Course Types</h2>
            <input
                type="text"
                placeholder="Add Course Type"
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
            />
            <button onClick={handleAddType}>Add</button>
            <ul>
                {courseTypes.map((type, index) => (
                    <li key={index}>
                        {type}
                        <button onClick={() => handleDeleteType(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseTypes;
