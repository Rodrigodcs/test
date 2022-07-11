import db from "../db";

async function getCities() {
  return db.query(`SELECT * FROM cities`);
}

async function findCity(name: string) {
  return db.query(`
    SELECT * 
    FROM cities
    WHERE name=$1
  `,[name]);
}

export const citiesRepository = {
  getCities,
  findCity
};
