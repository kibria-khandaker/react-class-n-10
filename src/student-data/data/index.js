import faker from 'faker';
import shortid from 'short-id';

const students = [];
export const DEPT =['CSE','SWE','EEE','BBA','MBA'];

for(let i=0; i<100; i++){
	const student = {};
	student.id = shortid.generate();
	student.name = faker.name.findName();
	student.dept = DEPT[Math.floor(Math.random() * DEPT.length)]; 

	students.push(student);
}

export default students;

