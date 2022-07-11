"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.citiesRepository = void 0;
const db_js_1 = __importDefault(require("../db.js"));
async function getCities() {
    return db_js_1.default.query(`SELECT * FROM cities`);
}
async function findCity(name) {
    return db_js_1.default.query(`
    SELECT * 
    FROM cities
    WHERE name=$1
  `, [name]);
}
exports.citiesRepository = {
    getCities,
    findCity
};
