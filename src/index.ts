import { User } from "./models/User";

const user = new User({ name: "test", age: 1 });

user.save();
