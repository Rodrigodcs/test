import { Router } from "express";

import citiesRouter from "./citiesRouter";
import studentsRouter from "./studentsRouter";
import teachersRouter from "./teachersRouter";

const router = Router();

router.use(citiesRouter);
router.use(studentsRouter);
router.use(teachersRouter);

export default router;