const { getUser, CreateUser, updateUser, deleteUser } = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getUser);
router.post("/", CreateUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);



module.exports = router;