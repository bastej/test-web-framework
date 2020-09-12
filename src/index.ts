import { User } from "./User";

const testUser = new User({ name: "Alex", age: 12 });

console.log(testUser.get("name"));
console.log(testUser.get("age"));
