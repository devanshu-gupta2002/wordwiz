import express from "express";
import { verifyToken } from "../middleware/auth.js";
import errorHandler from "../middleware/error.js";
import { getScore, updateScore } from "../controllers/user.js";
import { getUser } from "../controllers/user.js";

const router = express.Router()

router.get("/:userId", verifyToken, getScore)
router.put("/:userId", verifyToken, updateScore)
router.get("/", verifyToken, getUser)

export default router