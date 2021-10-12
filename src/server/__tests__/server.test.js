require("babel-polyfill");
const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with an HTML file", async () => {
        const response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toBe(
            "text/html; charset=UTF-8"
        );
    });
});

describe("POST /evaluate", () => {
    jest.setTimeout(10000);
    it("Responds with json data on valid request", async () => {
        const response = await request(app).post("/evaluate").send({
            url: "https://www.nature.com/articles/d41586-021-02643-y",
        });
        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toBe(
            "application/json; charset=utf-8"
        );
        expect(response.body.score_tag).toBe("P");
        expect(response.body.confidence).toBe("92");
    });

    it("Gives an error on invalid requests to api", async () => {
        const response = await request(app).post("/evaluate").send({
            url: "https://www.natur",
        });

        expect(response.headers["content-type"]).toBe(
            "application/json; charset=utf-8"
        );
        expect(response.status).toBe(422);
        expect(response.body.error).toBe("No content to analyze");
    });
});
