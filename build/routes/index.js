"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citiesRouter_1 = __importDefault(require("./citiesRouter"));
const studentsRouter_1 = __importDefault(require("./studentsRouter"));
const teachersRouter_1 = __importDefault(require("./teachersRouter"));
const router = (0, express_1.Router)();
router.use(citiesRouter_1.default);
router.use(studentsRouter_1.default);
router.use(teachersRouter_1.default);
exports.default = router;
