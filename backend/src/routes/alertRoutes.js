import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import {
  createAlert,
  getAlerts,
  deleteAlert,
} from "../controllers/alertController.js";

const router = express.Router();

router.post("/", authenticateToken, createAlert);
router.get("/", authenticateToken, getAlerts);
router.delete("/:id", authenticateToken, deleteAlert);

export default router;
