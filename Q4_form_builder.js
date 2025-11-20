// Q4: Custom Form Builder (Forms + Classes)

class FormBuilder {
  constructor(containerId, fields) {
    this.container = document.getElementById(containerId);
    this.fields = fields;
    this.renderForm();
  }

  renderForm() {
    let html = "";
    this.fields.forEach((field, index) => {
      const fieldId = `field_${index}`;
      html += `
        <div class="form-group">
          <label for="${fieldId}">${field.label}</label>
          <input
            type="${field.type}"
            id="${fieldId}"
            name="${field.name || fieldId}"
            placeholder="${field.placeholder || ""}"
          />
        </div>
      `;
    });
    this.container.innerHTML = html;
  }

  // Returns an object with key-value pairs of form data
  getFormData() {
    const data = {};
    this.fields.forEach((field, index) => {
      const fieldId = `field_${index}`;
      const inputElement = document.getElementById(fieldId);
      const key = field.name || fieldId;
      data[key] = inputElement.value;
    });
    return data;
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const fields = [
    { type: "text", label: "Username", name: "username", placeholder: "Enter username" },
    { type: "email", label: "Email", name: "email", placeholder: "Enter email" },
    { type: "password", label: "Password", name: "password", placeholder: "Enter password" },
  ];

  const formBuilder = new FormBuilder("formContainer", fields);

  const submitBtn = document.getElementById("submitBtn");
  const output = document.getElementById("formDataOutput");

  submitBtn.addEventListener("click", () => {
    const data = formBuilder.getFormData();
    output.textContent = JSON.stringify(data, null, 2);
  });
});
