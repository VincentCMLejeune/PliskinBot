const request = require("supertest");
const app = require("../app");

describe("TestAPI Endpoint", () => {
  test("should return Connected to backend", async () => {
    const res = await request(app).get("/testAPI");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Connected to backend");
  });
});
