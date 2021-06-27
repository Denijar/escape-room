import express from "express";
import coordinate from "./coordinate";
import getMaze from "../../../controllers/maze.controller";

const router = express.Router();

router.get("/", getMaze);

router.use("/coordinate", coordinate);

export default router;
