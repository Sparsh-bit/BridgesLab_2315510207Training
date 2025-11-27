import React, { useState } from "react";

function StudentForm({ initialData, onSubmit, onCancel }) {
  const [name, setName] = useState(initialData.name || "");
  const [section, setSection] = useState(initialData.section || "");
  const [marks, setMarks] = useState(initialData.marks || "");
  const [grade, setGrade] = useState(initialData.grade || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, section, marks, grade });
  };

  return (
    <div>
      <h2>{initialData.id ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <input
          placeholder="Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        /><br /><br />

        <input
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        /><br /><br />

        <input
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        /><br /><br />

        <button type="submit">Save</button>
        <button onClick={onCancel} type="button">Cancel</button>
      </form>
    </div>
  );
}

export default StudentForm;
