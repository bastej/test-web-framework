import { User } from "./User";

const testUser = new User({ name: "Alex", age: 12 });

testUser.on("change", () => {
  console.log("1");
});

testUser.on("change", () => {
  console.log("2");
});

testUser.trigger("change");
