import express from "express";
import hello from "./hello";
import maze from "./maze";
import input from "./input";

const router = express.Router();

router.use("/hello", hello);
router.use("/maze", maze);
router.use("/input", input);

export default router;
