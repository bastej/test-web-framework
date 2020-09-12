import { User } from "./User";

const testUser = new User({ name: "Alex", age: 12 });

testUser.on("change", () => {});

console.log(testUser);
