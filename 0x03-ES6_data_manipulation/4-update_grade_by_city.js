export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      let studentGrade = 'N/A';

      const newGrade = newGrades.filter(
        (grade) => grade.studentId === student.id,
      );

      if (newGrade.length > 0) {
        studentGrade = newGrade[0].grade;
      }

      // eslint-disable-next-line no-param-reassign
      student.grade = studentGrade;

      return student;
    });
}
