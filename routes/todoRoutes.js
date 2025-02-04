const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");


router.get("/",todoController.getTodo);
router.post("/add",todoController.addTodo);
router.get("/delete/:id",todoController.deleteTodo);
router.get("/toggle/:id",todoController.toggleComplete);

module.exports = router;