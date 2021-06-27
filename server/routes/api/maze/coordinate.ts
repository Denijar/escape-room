import express from "express";
import { getCoordinate, putCoordinate } from "../../../controllers/coordinate.controller";

const router = express.Router();

router.get("/", getCoordinate);
router.get("/", putCoordinate);

export default router;
