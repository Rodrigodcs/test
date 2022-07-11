"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsController_js_1 = require("../controllers/studentsController.js");
const studentsRouter = (0, express_1.Router)();
studentsRouter.get("/students", studentsController_js_1.studentsController.getStudents);
studentsRouter.post("/students", studentsController_js_1.studentsController.createStudent);
exports.default = studentsRouter;
