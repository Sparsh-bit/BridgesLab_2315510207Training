const BASE_URL = "http://localhost:5000/students";

let editId = null;
let studentCache = [];

function showLoading() {
    document.getElementById("loading").classList.remove("hidden");
}
function hideLoading() {
    document.getElementById("loading").classList.add("hidden");
}

// -------------------- LOAD STUDENTS --------------------
function loadStudents() {
    showLoading();

    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            studentCache = data;
            displayStudents(data);
            hideLoading();
        });
}

function displayStudents(data) {
    const body = document.getElementById("tableBody");
    body.innerHTML = "";

    data.forEach(stu => {
        body.innerHTML += `
            <tr>
                <td>${stu.name}</td>
                <td>${stu.section}</td>
                <td>${stu.marks}</td>
                <td>${stu.grade}</td>
                <td>
                    <button onclick="viewDetails(${stu.id})">View</button>
                    <button onclick="openEditForm(${stu.id})">Edit</button>
                    <button onclick="deleteStudent(${stu.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// -------------------- SEARCH --------------------
function searchStudents() {
    const text = document.getElementById("searchBox").value.toLowerCase();

    const filtered = studentCache.filter(stu =>
        stu.name.toLowerCase().includes(text)
    );

    displayStudents(filtered);
}

// -------------------- SORTING --------------------
function sortStudents() {
    const option = document.getElementById("sortSelect").value;

    let sorted = [...studentCache];

    if (option === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (option === "marks") {
        sorted.sort((a, b) => a.marks - b.marks);
    }
    if (option === "grade") {
        sorted.sort((a, b) => a.grade.localeCompare(b.grade));
    }

    displayStudents(sorted);
}

// -------------------- FORM --------------------
function openAddForm() {
    editId = null;
    document.getElementById("formTitle").innerText = "Add Student";
    document.getElementById("formBox").classList.remove("hidden");
    clearForm();
}

function openEditForm(id) {
    fetch(`${BASE_URL}/${id}`)
        .then(res => res.json())
        .then(stu => {
            editId = id;

            document.getElementById("name").value = stu.name;
            document.getElementById("section").value = stu.section;
            document.getElementById("marks").value = stu.marks;
            document.getElementById("grade").value = stu.grade;

            document.getElementById("formTitle").innerText = "Edit Student";
            document.getElementById("formBox").classList.remove("hidden");
        });
}

function validateForm(name, section, marks, grade) {
    let valid = true;

    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    if (name === "") {
        document.getElementById("nameError").innerText = "Name required";
        valid = false;
    }
    if (section === "") {
        document.getElementById("sectionError").innerText = "Section required";
        valid = false;
    }
    if (marks === "" || marks < 0 || marks > 100) {
        document.getElementById("marksError").innerText = "Enter marks 0-100";
        valid = false;
    }
    if (!["A","B","C","D","E","F"].includes(grade.toUpperCase())) {
        document.getElementById("gradeError").innerText = "Grade must be A-F";
        valid = false;
    }

    return valid;
}

function saveStudent() {
    const name = document.getElementById("name").value;
    const section = document.getElementById("section").value;
    const marks = document.getElementById("marks").value;
    const grade = document.getElementById("grade").value;

    if (!validateForm(name, section, marks, grade)) return;

    const student = { name, section, marks, grade };

    if (editId === null) {
        fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            alert("Student Added!");
            closeForm();
            loadStudents();
        });
    } else {
        fetch(`${BASE_URL}/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            alert("Student Updated!");
            closeForm();
            loadStudents();
        });
    }
}

function deleteStudent(id) {
    fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    }).then(() => {
        alert("Student Deleted!");
        loadStudents();
    });
}

// -------------------- DETAILS --------------------
function viewDetails(id) {
    fetch(`${BASE_URL}/${id}`)
        .then(res => res.json())
        .then(stu => {
            document.getElementById("detailName").innerText = "Name: " + stu.name;
            document.getElementById("detailSection").innerText = "Section: " + stu.section;
            document.getElementById("detailMarks").innerText = "Marks: " + stu.marks;
            document.getElementById("detailGrade").innerText = "Grade: " + stu.grade;

            document.getElementById("detailsBox").classList.remove("hidden");
        });
}

// -------------------- HELPERS --------------------
function closeForm() {
    document.getElementById("formBox").classList.add("hidden");
    clearForm();
}

function closeDetails() {
    document.getElementById("detailsBox").classList.add("hidden");
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("section").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("grade").value = "";
}
