const request = require("supertest");

const app = require("../app");

describe("GET Todo", () => {
  test("should return a list of todos", async () => {
    const res = await request(app).get("/todo");
    expect(res.statusCode).toEqual(200);
    expect(res.body.todos).toBeDefined();
    expect(Array.isArray(res.body.todos)).toBe(true);
    expect(res.body.todos.every((todo) => typeof todo.name === "string")).toBe(
      true
    );
  });
});

describe("POST Todo", () => {
  afterAll(async () => {
    const res = await request(app).delete("/todo").send({ todo: "test" });
  });
  test("post request should run correctly", async () => {
    const res = await request(app).post("/todo").send({ todo: "test" });
    expect(res.statusCode).toEqual(201);
    expect(res.body.todo).toBeDefined();
    expect(res.body.todo).toEqual("test");
  });
  test("post request should fail if no todo is provided", async () => {
    const res = await request(app).post("/todo").send({});
    expect(res.statusCode).toEqual(400);
  });
  test("post request should fail if todo is empty", async () => {
    const res = await request(app).post("/todo").send({ todo: "" });
    expect(res.statusCode).toEqual(400);
  });
});

describe("DELETE Todo", () => {
  beforeEach(async () => {
    const res = await request(app).post("/todo").send({ todo: "test" });
  });
  afterAll(async () => {
    const res = await request(app).delete("/todo").send({ todo: "test" });
  });
  test("delete request should run correctly", async () => {
    const res = await request(app).delete("/todo").send({ todo: "test" });
    expect(res.statusCode).toEqual(204);
  });
  test("delete request should fail if no todo is provided", async () => {
    const res = await request(app).delete("/todo").send({});
    expect(res.statusCode).toEqual(400);
  });
  test("delete request should fail if todo is empty", async () => {
    const res = await request(app).delete("/todo").send({ todo: "" });
    expect(res.statusCode).toEqual(400);
  });
  // test("delete request should fail if todo is not found", async () => {
  //   const res = await request(app).delete("/todo").send({ todo: "not found" });
  //   expect(res.statusCode).toEqual(400);
  // });
  test("correct delete request should remove todo from list", async () => {
    const res = await request(app).delete("/todo").send({ todo: "test" });
    const todoList = await request(app).get("/todo");
    expect(todoList.body.todos.some((todo) => todo.name === "test")).toBe(
      false
    );
  });
});
