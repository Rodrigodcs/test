import db from "../db";

async function createStudent(name: string, cityId: number) {
    return db.query(`
        INSERT INTO students (name, "cityId")
        VALUES ($1, $2)
    `,[name, cityId]);
}

async function getStudents() {
    return await db.query(`
        SELECT students.id, students.name, cities.name as city, teachers.name as "teachersName"
        FROM students
        JOIN cities
        ON students."cityId"=cities.id
        JOIN "studentsTeachers"
        ON students.id = "studentId"
        JOIN teachers
        ON "teachersId" = teachers.id
    `);
}

export const studentsRepository = {
  createStudent,
  getStudents
};