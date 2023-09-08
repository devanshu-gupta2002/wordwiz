import express from 'express'
import { getQuestion } from '../controllers/question.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get("/question", verifyToken, getQuestion)
// router.post("/question/create", createQuestion)

export default router