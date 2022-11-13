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
  test("post request should run correctly", async () => {
    const res = await request(app).post("/todo").send({ todo: "test" });
    expect(res.statusCode).toEqual(201);
    expect(res.body.todo).toBeDefined();
    expect(res.body.todo).toEqual("test");
  });
  test("post request should fail if no todo is provided", async () => {
    const res = await request(app).post("/todo").send({});
    expect(res.statusCode).toEqual(400);
  })
  test("post request should fail if todo is empty", async () => {
    const res = await request(app).post("/todo").send({ todo: "" });
    expect(res.statusCode).toEqual(400);
  })
});

