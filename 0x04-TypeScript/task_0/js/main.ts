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
