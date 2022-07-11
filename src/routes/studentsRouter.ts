import { Router } from "express";

import { studentsController } from "../controllers/studentsController";

const studentsRouter = Router()

studentsRouter.get("/students", studentsController.getStudents);
studentsRouter.post("/students", studentsController.createStudent);

export default studentsRouter;