CREATE TABLE teachers (
	id serial NOT NULL PRIMARY KEY,
	name TEXT NOT NULL
);

CREATE TABLE students (
	id serial NOT NULL PRIMARY KEY,
	name TEXT NOT NULL,
	"cityId" integer NOT NULL
);

CREATE TABLE cities (
	id serial NOT NULL PRIMARY KEY,
	name TEXT NOT NULL
);

CREATE TABLE "studentsTeachers" (
	id serial NOT NULL PRIMARY KEY,
	"studentId" integer NOT NULL,
	"teachersId" integer NOT NULL
);

ALTER TABLE students ADD CONSTRAINT "students_fk0" FOREIGN KEY ("cityId") REFERENCES cities(id);
ALTER TABLE "studentsTeachers" ADD CONSTRAINT "studentsTeachers_fk0" FOREIGN KEY ("studentId") REFERENCES students(id);
ALTER TABLE "studentsTeachers" ADD CONSTRAINT "studentsTeachers_fk1" FOREIGN KEY ("teachersId") REFERENCES teachers(id);

INSERT INTO cities (name) VALUES ('Toledo');
INSERT INTO cities (name) VALUES ('Cascavel');
INSERT INTO cities (name) VALUES ('Curitiba');

INSERT INTO teachers (name) VALUES ('Vergara');
INSERT INTO teachers (name) VALUES ('Kolling');
INSERT INTO teachers (name) VALUES ('Nakano');
INSERT INTO teachers (name) VALUES ('Daniel');
INSERT INTO teachers (name) VALUES ('Jaqueline');

INSERT INTO students (name, "cityId") VALUES ('Rodrigo',1);
INSERT INTO students (name, "cityId") VALUES ('Pedro',1);
INSERT INTO students (name, "cityId") VALUES ('Paulo',2);
INSERT INTO students (name, "cityId") VALUES ('Marcos',3);
INSERT INTO students (name, "cityId") VALUES ('Leandro',1);
INSERT INTO students (name, "cityId") VALUES ('Felipe',2);
