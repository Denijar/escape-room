import express from "express";
import { getCoordinate, putCoordinate } from "../../../controllers/coordinate.controller";

const router = express.Router();

router.get("/:id", getCoordinate);
router.put("/:id", putCoordinate);

export default router;
