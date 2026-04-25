const request = require("supertest");
const app = require("../src/app");

describe("GET /health", () => {
  it("returns 200 and JSON body", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok", service: "zura-devops-ci-cd" });
  });
});

describe("GET /", () => {
  it("returns HTML 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toContain("Zura CI/CD Pipeline");
  });
});
