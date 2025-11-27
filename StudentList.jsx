import React from "react";

function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
  return (
    <div>
      <h2>Student List</h2>

      <button onClick={onLoad}>Load Students</button>
      <button onClick={onAdd}>Add Student</button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Section</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((stu) => (
            <tr key={stu.id}>
              <td>{stu.name}</td>
              <td>{stu.section}</td>
              <td>{stu.marks}</td>
              <td>{stu.grade}</td>

              <td>
                <button onClick={() => onEdit(stu)}>Edit</button>
                <button onClick={() => onDelete(stu.id)}>Delete</button>
                <button onClick={() => onView(stu.id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
