import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import {
  createIncident,
  getIncidents,
  updateIncidentStatus,
  deleteIncident,
} from "../controllers/incidentController.js";

const router = express.Router();

router.post("/", authenticateToken, createIncident);
router.get("/", authenticateToken, getIncidents);
router.patch("/:id", authenticateToken, updateIncidentStatus);
router.delete("/:id", authenticateToken, deleteIncident);

export default router;
