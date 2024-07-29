interface Student {
  firstName : string;
  lastName : string;
  age : number;
  location : string;
};

const S1 : Student = {
  firstName : "adam",
  lastName : "smith",
  age : 20,
  location : "Canada",
};

const S2 : Student = {
  firstName : "aymane",
  lastName : "smini",
  age : 25,
  location : "UK",
};

let studentsList : Student[] = [S1, S2];

function renderTable() {
  const table = document.createElement("table");
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = row.insertCell();
    locationCell.innerHTML = student.location;
  });
  document.body.appendChild(table);
};

renderTable();