"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citiesController_js_1 = require("../controllers/citiesController.js");
const citiesRouter = (0, express_1.Router)();
citiesRouter.get("/cities", citiesController_js_1.getCities);
exports.default = citiesRouter;
