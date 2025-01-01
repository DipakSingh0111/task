// src/components/StudentRegistrations.js
import { useState } from "react";

const StudentRegistrations = () => {
    const [offerings, setOfferings] = useState([
        "Individual - English",
        "Group - Hindi",
        "Special - Urdu",
    ]);
    const [registrations, setRegistrations] = useState({});
    const [selectedOffering, setSelectedOffering] = useState("");
    const [studentName, setStudentName] = useState("");

    const handleRegisterStudent = () => {
        if (selectedOffering && studentName) {
            setRegistrations((prev) => ({
                ...prev,
                [selectedOffering]: [...(prev[selectedOffering] || []), studentName],
            }));
            setStudentName("");
        }
    };

    const getRegisteredStudents = (offering) => {
        return registrations[offering] || [];
    };

    return (
        <div>
            <h2>Student Registrations</h2>
            <div>
                <select
                    value={selectedOffering}
                    onChange={(e) => setSelectedOffering(e.target.value)}
                >
                    <option value="">Select Course Offering</option>
                    {offerings.map((offering, index) => (
                        <option key={index} value={offering}>
                            {offering}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                />
                <button onClick={handleRegisterStudent}>Register</button>
            </div>
            <h3>Registered Students</h3>
            <ul>
                {offerings.map((offering, index) => (
                    <li key={index}>
                        <strong>{offering}:</strong>
                        <ul>
                            {getRegisteredStudents(offering).map((student, idx) => (
                                <li key={idx}>{student}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentRegistrations;
