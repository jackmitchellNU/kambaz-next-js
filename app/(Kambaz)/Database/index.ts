import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import enrollments from "./enrollments.json";

const users = [
  { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland", dob: "2000-01-01", email: "alice@wonderland.com", role: "STUDENT" },
  { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Belcher", dob: "1998-01-01", email: "bob@burgers.com", role: "STUDENT" },
  { _id: "345", username: "charlie", password: "charlie", firstName: "Charlie", lastName: "Brown", dob: "1999-01-01", email: "charlie@peanuts.com", role: "FACULTY" },
];

export { users, courses, modules, assignments, enrollments };