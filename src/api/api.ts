import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { router } from "../routes";

dotenv.config();
dotenv.config({ quiet: true });

export const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

app.use("/api", router);
