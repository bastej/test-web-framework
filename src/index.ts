import { User } from "./User";

const testUser = new User({ name: "Alex", age: 12 });

testUser.set({ age: 23 });

console.log(testUser.get("name"));
console.log(testUser.get("age"));
