"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsController_1 = require("../controllers/studentsController");
const studentsRouter = (0, express_1.Router)();
studentsRouter.get("/students", studentsController_1.studentsController.getStudents);
studentsRouter.post("/students", studentsController_1.studentsController.createStudent);
exports.default = studentsRouter;
