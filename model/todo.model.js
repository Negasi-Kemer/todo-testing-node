// Require mongoose
const mongoose = require("mongoose");

// Schema
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

// Model
const TodoModel = mongoose.model("Todo", TodoSchema);

// Export model
module.exports = TodoModel;
