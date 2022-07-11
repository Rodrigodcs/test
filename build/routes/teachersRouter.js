"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teachersController_js_1 = require("../controllers/teachersController.js");
const teachersRouter = (0, express_1.Router)();
teachersRouter.get("/teachers", teachersController_js_1.teachersController.getTeachers);
exports.default = teachersRouter;
