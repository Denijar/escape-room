import express from "express";
import hello from "../../controllers/hello.controller";

const router = express.Router();

router.get("/", hello);

export default router;
