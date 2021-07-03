import express from "express";
import getCoordinate from "../../../controllers/coordinate.controller";

const router = express.Router();

router.get("/:id/coordinate", getCoordinate);

export default router;
