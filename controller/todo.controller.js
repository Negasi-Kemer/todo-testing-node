// Require Todo model
const TodoModel = require("../model/todo.model");
exports.createTodo = (req, res, next) => {
  // Call 'create' method
  const createdModel = TodoModel.create(req.body);
  // Send a response with a 201 status
  res.status(201).json(createdModel);
};
