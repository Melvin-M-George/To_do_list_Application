const Todo = require("../models/todoModel");

const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render("index", { todos });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching todos");
    }
}

const addTodo = async (req, res) => {
    try {
        const { task } = req.body;
        await Todo.create({ task });
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error adding todo");
    }
};


const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.error(error); 
        res.status(500).send("Error deleting todo"); 
    }
}


const toggleComplete = async (req,res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findById(id);
        todo.completed = !todo.completed;
        await todo.save();  
        res.redirect("/");
    } catch (error) {
        console.error(error); 
        res.status(500).send("Error toggling todo status");
    }
}
