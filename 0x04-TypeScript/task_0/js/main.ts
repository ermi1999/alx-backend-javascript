interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Abebe",
  lastName: "Kebede",
  age: 26,
  location: "Adiss ababa",
};

const student2: Student = {
  firstName: "Kebede",
  lastName: "Abebe",
  age: 34,
  location: "Adama",
};

const studentList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table')

for (const student of studentList) {
  const row: HTMLTableRowElement = document.createElement('tr')
  const firstNameCell: HTMLTableCellElement = document.createElement('td')

  firstNameCell.textContent = student.firstName
  row.appendChild(firstNameCell)

  const locationCell: HTMLTableCellElement = document.createElement('td')
  locationCell.textContent = student.location
  row.appendChild(locationCell)

  table.appendChild(row)
}

document.body.appendChild(table)
