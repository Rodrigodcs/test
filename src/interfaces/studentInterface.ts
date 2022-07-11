import { City } from "./cityInterface";
import { Teacher } from "./teacherInterface";

export interface Student {
    name: String;
    teachers: Teacher[];
    city: City;
}
