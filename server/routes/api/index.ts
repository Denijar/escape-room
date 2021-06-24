import express from "express";
import hello from "./hello";
import maze from "./maze";

const router = express.Router();

router.use("/hello", hello);
router.use("/maze", maze);

export default router;
