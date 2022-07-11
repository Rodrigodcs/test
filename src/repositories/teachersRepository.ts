import db from "../db";

async function getTeachers() {
    return await db.query(`
        SELECT *
        FROM teachers
    `);
}

export const teachersRepository = {
  getTeachers
};