const request = require("supertest");
const app = require("../app");

describe("TestAPI Endpoint", () => {
  test("should return 404", async () => {
    const res = await request(app).get("/wrongendpoint");
    expect(res.statusCode).toEqual(404);
  });
});
