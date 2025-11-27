import React from "react";

function StudentDetails({ student, onBack }) {
  return (
    <div>
      <h2>Student Details</h2>

      <p><b>Name:</b> {student.name}</p>
      <p><b>Section:</b> {student.section}</p>
      <p><b>Marks:</b> {student.marks}</p>
      <p><b>Grade:</b> {student.grade}</p>

      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default StudentDetails;
