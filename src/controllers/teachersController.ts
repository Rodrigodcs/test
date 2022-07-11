import { Request, Response} from "express"

import { teachersRepository } from "../repositories/teachersRepository"

async function getTeachers(req:Request, res:Response) {
  try {
    const teachers = await teachersRepository.getTeachers(); 
    return res.send(teachers.rows).status(200);
    
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export const teachersController = {
    getTeachers
  };