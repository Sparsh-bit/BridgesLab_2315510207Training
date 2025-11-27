import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import {
  getStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  getStudentById
} from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("list");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const loadStudents = () => {
    getStudents()
      .then(res => res.json())
      .then(data => setStudents(data));
  };

  const handleDelete = (id) => {
    deleteStudent(id).then(() => alert("Student deleted!"));
  };

  const handleAddSubmit = (student) => {
    addStudent(student).then(() => {
      alert("Student added!");
      setMode("list");
    });
  };

  const handleEditSubmit = (student) => {
    updateStudent(selectedStudent.id, student).then(() => {
      alert("Student updated!");
      setMode("list");
    });
  };

  const handleView = (id) => {
    getStudentById(id)
      .then(res => res.json())
      .then(data => {
        setSelectedStudent(data);
        setMode("details");
      });
  };

  return (
    <div>
      <h1>Student Result App</h1>

      {mode === "list" && (
        <StudentList
          students={students}
          onLoad={loadStudents}
          onAdd={() => { setSelectedStudent(null); setMode("add"); }}
          onEdit={(stu) => { setSelectedStudent(stu); setMode("edit"); }}
          onDelete={handleDelete}
          onView={handleView}
        />
      )}

      {mode === "add" && (
        <StudentForm
          initialData={{}}
          onSubmit={handleAddSubmit}
          onCancel={() => setMode("list")}
        />
      )}

      {mode === "edit" && (
        <StudentForm
          initialData={selectedStudent}
          onSubmit={handleEditSubmit}
          onCancel={() => setMode("list")}
        />
      )}

      {mode === "details" && (
        <StudentDetails
          student={selectedStudent}
          onBack={() => setMode("list")}
        />
      )}
    </div>
  );
}

export default App;
