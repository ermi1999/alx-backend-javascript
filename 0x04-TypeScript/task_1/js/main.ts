interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher: Teacher = {
  firstName: "john",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contact: false,
};

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string,
) => `${firstName[0]}. ${lastName}`;

const printTeacherFullInfo = (teacher: Teacher) =>
  `${teacher.firstName} ${teacher.lastName} lives in ${teacher.location} and he/she is ${teacher.fullTimeEmployee ? "" : "not"} a full time employee.`;

interface studentClassConstructor {
  (firstName: string, lastName: string): void;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}

const newStudent: StudentClassInterface = new StudentClass("John", "Doe");

console.log(newStudent.workOnHomework());
console.log(newStudent.displayName());
console.log(printTeacherFullInfo(teacher));
console.log(printTeacher(teacher.firstName, teacher.lastName));
console.log(director1);
