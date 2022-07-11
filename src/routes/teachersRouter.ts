import { Router } from "express";

import { teachersController } from "../controllers/teachersController";

const teachersRouter = Router()

teachersRouter.get("/teachers", teachersController.getTeachers);

export default teachersRouter; 