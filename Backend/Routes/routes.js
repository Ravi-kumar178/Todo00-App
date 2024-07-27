const express = require("express");
const router = express.Router();

const {createTodo} = require("../Controllers/createTodo");
const {getAllTodo , getOneTodo} = require("../Controllers/getTodo")
const {updateTodo} = require("../Controllers/updateTodo")
const {deleteTodo} = require("../Controllers/deleteTodo");

router.post("/createTodo",createTodo);
router.get("/getAllTodo",getAllTodo);
router.get("/getOneTodo/:id",getOneTodo);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports = router;