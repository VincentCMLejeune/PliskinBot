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
