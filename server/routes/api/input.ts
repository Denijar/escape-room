import express from "express";
import checkAnswer from "../../controllers/input.controller";

const router = express.Router();

router.get("/", checkAnswer);

export default router;
