"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsRepository = void 0;
const db_1 = __importDefault(require("../db"));
async function createStudent(name, cityId) {
    return db_1.default.query(`
        INSERT INTO students (name, "cityId")
        VALUES ($1, $2)
    `, [name, cityId]);
}
async function getStudents() {
    return await db_1.default.query(`
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
exports.studentsRepository = {
    createStudent,
    getStudents
};
