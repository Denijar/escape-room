import express from "express";
import coordinate from "./coordinate";
import getMaze from "../../../controllers/maze.controller";

const router = express.Router();

router.get("/:id", getMaze);

router.use("/", coordinate);

export default router;
