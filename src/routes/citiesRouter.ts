import { Router } from "express";

import { getCities } from "../controllers/citiesController";

const citiesRouter = Router();

citiesRouter.get("/cities", getCities);

export default citiesRouter;