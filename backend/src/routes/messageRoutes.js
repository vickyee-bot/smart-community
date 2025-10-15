import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { sendMessage, getMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", authenticateToken, sendMessage);
router.get("/", authenticateToken, getMessages);

export default router;
