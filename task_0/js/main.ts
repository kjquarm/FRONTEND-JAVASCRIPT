interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Sam",
  lastName: "BM",
  age: 20,
  location: "Accra",
};
const student2: Student = {
  firstName: "Samuel",
  lastName: "QM",
  age: 22,
  location: "Kumasi",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table")
const tableBody = document.createElement("tbody")

studentsList.forEach((student:Student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});