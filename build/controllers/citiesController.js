"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCities = void 0;
const citiesRepository_js_1 = require("../repositories/citiesRepository.js");
async function getCities(req, res) {
    try {
        const cities = await citiesRepository_js_1.citiesRepository.getCities();
        return res.send(cities.rows).status(200);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
exports.getCities = getCities;
