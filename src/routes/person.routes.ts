import express from "express";
import { findPersonById, addPersons } from "../controller/person.controller";

export const personRouter = express.Router();

personRouter.get("/", (req, res) => {
  res.status(200).json({ message: "hello world person" });
});
personRouter.get("/:id", findPersonById);
personRouter.post("/add-person", addPersons);
