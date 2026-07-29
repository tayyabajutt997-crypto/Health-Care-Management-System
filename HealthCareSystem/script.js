const form = document.getElementById("patientForm");

const patientList = document.getElementById("patientList");

form.addEventListener("submit", function(event){

event.preventDefault();

const name = document.getElementById("name").value;

const age = document.getElementById("age").value;

const disease = document.getElementById("disease").value;

const li = document.createElement("li");

li.innerHTML = `
<strong>Name:</strong> ${name} |
<strong>Age:</strong> ${age} |
<strong>Disease:</strong> ${disease}
`;

patientList.appendChild(li);

form.reset();

alert("Patient Registered Successfully!");

});