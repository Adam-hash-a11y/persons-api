import express from "express";
import dotenv from "dotenv";
import { filterById } from "./personServices";
import bodyParser from "body-parser";

dotenv.config();

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:id", (req, res) => {
  console.log(req.params.id);
  const userId = Number(req.params.id);
  const test = filterById(userId);
  res.json(test);
});

app.post("/adam", (req, res) => {
  res.status(200).json(req.body);
});
