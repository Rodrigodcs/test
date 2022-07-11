"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsController = void 0;
const citiesRepository_js_1 = require("../repositories/citiesRepository.js");
const studentsRepository_js_1 = require("../repositories/studentsRepository.js");
async function createStudent(req, res) {
    const newStudent = req.body;
    const { name, city } = newStudent;
    console.log(newStudent);
    try {
        const verifyCity = await citiesRepository_js_1.citiesRepository.findCity(city);
        if (!verifyCity.rows.length) {
            return res.send("cidade não cadastrada").status(422);
        }
        const cityId = verifyCity.rows[0].id;
        await studentsRepository_js_1.studentsRepository.createStudent(name, cityId);
        return res.sendStatus(201);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
async function getStudents(req, res) {
    try {
        const students = await studentsRepository_js_1.studentsRepository.getStudents();
        return res.send(students.rows).status(200);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
exports.studentsController = {
    createStudent,
    getStudents
};
