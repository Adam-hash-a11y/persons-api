import express from "express";
import dotenv from "dotenv";
import { filterById } from "./personServices";
import bodyParser from "body-parser";
import validator from "validator";

dotenv.config();

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:id", (req, res) => {
  if (!validator.isInt(req.params.id)) {
    return res.status(400).json({ error: "invalid id, the id must a number" });
  }
  const userId = Number(req.params.id);
  const test = filterById(userId);
  if (test.length == 0) {
    return res.status(404).json({ error: "person is not found" });
  } else {
    res.status(200).json(test);
  }
});

app.post("/adam", (req, res) => {
  res.status(200).json(req.body);
});
