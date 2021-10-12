const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const FormData = require("form-data");
const fetch = require("node-fetch");

dotenv.config();

const PORT = process.env.PORT || 8081;

const app = express();
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"],
    })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist"));

app.get("/", function (req, res) {
    res.sendFile(path.resolve("./dist/index.html"));
    res.sendFile(path.resolve("src/client/views/index.html"));
});

app.post("/evaluate", function (req, res) {
    const inputURL = req.body.url;
    const formdata = new FormData();
    formdata.append("key", `${process.env.API_KEY}`);
    formdata.append("url", `${inputURL}`);
    formdata.append("lang", "en");

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
    };

    fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            if (data.status.code !== "0") {
                throw Error(data.status.msg);
            }

            data = (({
                score_tag,
                agreement,
                confidence,
                irony,
                subjectivity,
            }) => ({ score_tag, agreement, confidence, irony, subjectivity }))(
                data
            );
            res.status(200).json(data);
        })
        .catch((error) => res.status(422).json({ error: error.message }));
});

app.listen(PORT, (error) => {
    if (error) {
        throw new Error(error);
    }
    console.log(`Server listening on port ${PORT}!`);
});

module.exports = app;
