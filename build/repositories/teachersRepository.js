"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachersRepository = void 0;
const db_js_1 = __importDefault(require("../db.js"));
async function getTeachers() {
    return await db_js_1.default.query(`
        SELECT *
        FROM teachers
    `);
}
exports.teachersRepository = {
    getTeachers
};
