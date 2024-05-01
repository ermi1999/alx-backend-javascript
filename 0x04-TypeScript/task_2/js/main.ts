interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have a break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

interface CreateEmployeeInterface {
  (salary: number | string): Director | Teacher;
}

const createEmployee: CreateEmployeeInterface = (salary) => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

const isDirector = (employee: Director | Teacher): employee is Director => employee instanceof Director;

const executeWork = (employee: Director | Teacher) => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks()
  } else {
    return employee.workTeacherTasks()
  }
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') {
    return "Teaching Math"
  } else {
    return "Teaching History"
  }
}

console.log(teachClass('Math'))
console.log(teachClass('History'))

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));
