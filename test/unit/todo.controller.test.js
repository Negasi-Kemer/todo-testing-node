// Require the todo controller
const TodoController = require("../../controller/todo.controller");

// Require Todo model
const TodoModel = require("../../model/todo.model");

// Node mocks
const httpMocks = require("node-mocks-http");

// Require the mock data
const newTodo = require("../mock-data/new-todo.json");

// Implement mock function if 'create' method is being called
TodoModel.create = jest.fn();
let req, res, next;
// Runs a function before each of the tests in this file runs.
beforeEach(() => {
  // A mock reques
  req = httpMocks.createRequest();
  // A mock response
  res = httpMocks.createResponse();
  next = null;
});
describe("TodoController.createTodo", () => {
  beforeEach(() => {
    req.body = newTodo;
  });
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
  it("should call TodoModel.create", () => {
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });
  // Check if the response code from the method is 201
  it("should return 201 response code", () => {
    TodoController.createTodo(req, res, next);
    expect(res.statusCode).toBe(201);
    // Check if the method is sending response back
    expect(res._isEndCalled()).toBeTruthy();
  });

  // Check if response is sending back JSON body
  it("should return JSON body in response", () => {
    // Set mock function
    TodoModel.create.mockReturnValue(newTodo);
    TodoController.createTodo(req, res, next);
    // Check if returned JSON data is same as "newTodo"
    expect(res._getJSONData()).toStrictEqual(newTodo);
  });
});
