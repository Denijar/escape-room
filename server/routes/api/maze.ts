import express from "express";
import getMaze from "../../controllers/maze.controller";

const router = express.Router();

router.get("/", getMaze);

export default router;
