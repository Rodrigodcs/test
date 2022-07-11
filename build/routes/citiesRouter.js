"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citiesController_1 = require("../controllers/citiesController");
const citiesRouter = (0, express_1.Router)();
citiesRouter.get("/cities", citiesController_1.getCities);
exports.default = citiesRouter;
