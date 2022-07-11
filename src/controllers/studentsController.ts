import { Request, Response} from "express"

import { citiesRepository } from "../repositories/citiesRepository";
import { studentsRepository } from "../repositories/studentsRepository"

async function createStudent(req:Request, res:Response) {
    const newStudent = req.body
    const {name, city} = newStudent
    console.log(newStudent)
  try {
    const verifyCity = await citiesRepository.findCity(city)
    if(!verifyCity.rows.length){
        return res.send("cidade não cadastrada").status(422)
    }

    const cityId = verifyCity.rows[0].id
    await studentsRepository.createStudent(name, cityId);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function getStudents(req:Request, res:Response) {
  try {
    const students = await studentsRepository.getStudents(); 
    return res.send(students.rows).status(200);
    
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export const studentsController = {
    createStudent,
    getStudents
  };