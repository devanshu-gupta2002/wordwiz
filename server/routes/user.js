import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { updateScore } from "../controllers/user.js";

const router = express.Router()

router.put("/:userId", verifyToken, updateScore)

export default router