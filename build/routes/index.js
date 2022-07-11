"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citiesRouter_js_1 = __importDefault(require("./citiesRouter.js"));
const studentsRouter_js_1 = __importDefault(require("./studentsRouter.js"));
const teachersRouter_js_1 = __importDefault(require("./teachersRouter.js"));
const router = (0, express_1.Router)();
router.use(citiesRouter_js_1.default);
router.use(studentsRouter_js_1.default);
router.use(teachersRouter_js_1.default);
exports.default = router;
