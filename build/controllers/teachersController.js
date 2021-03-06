"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachersController = void 0;
const teachersRepository_1 = require("../repositories/teachersRepository");
async function getTeachers(req, res) {
    try {
        const teachers = await teachersRepository_1.teachersRepository.getTeachers();
        return res.send(teachers.rows).status(200);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
exports.teachersController = {
    getTeachers
};
