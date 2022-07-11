import { Request, Response} from "express"

import { citiesRepository } from "../repositories/citiesRepository";

export async function getCities(req:Request, res:Response) {
  try {
    const cities = await citiesRepository.getCities();
    return res.send(cities.rows).status(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}