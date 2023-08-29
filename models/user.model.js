const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "tushar ahmed",
    email: "tushar15-3549@diu.edu.bd",
  },
  {
    id: uuidv4(),
    username: "sakib al hasan",
    email: "sakib75@gmail.com",
  },
];
module.exports = users;