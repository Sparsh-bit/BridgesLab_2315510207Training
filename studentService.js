const BASE_URL = "http://localhost:5000/students";

export const getStudents = () => fetch(BASE_URL);

export const addStudent = (student) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });

export const deleteStudent = (id) =>
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" });

export const updateStudent = (id, student) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });

export const getStudentById = (id) => fetch(`${BASE_URL}/${id}`);
