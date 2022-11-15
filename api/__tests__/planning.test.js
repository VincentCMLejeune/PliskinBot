const request = require("supertest");

const app = require("../app");

describe("GET Planning", () => {
  test("should return a list of todos", async () => {
    const res = await request(app).get("/planning");
    expect(res.statusCode).toEqual(200);
    expect(res.body.planning).toBeDefined();
    expect(Array.isArray(res.body.planning)).toBe(true);
  });
});
