const request = require("supertest");
const app = require("../app");

describe("Stellaris Endpoint", () => {
  test("should return techs list", async () => {
    const res = await request(app).get("/stellaris");
    expect(res.statusCode).toEqual(200);
  });
});
