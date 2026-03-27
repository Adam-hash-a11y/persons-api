import request from "supertest";
import express from "express";

describe("GET /", () => {
  it("should return Hello world ", async () => {
    // Given

    const app = express();
    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    // When
    const response = await request(app).get("/");

    // Then
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
  });
});
