import express from "express";
import { personRouter } from "./person.routes";

export const router = express.Router();

router.use("/persons", personRouter);
