import express from 'express'
import { createQuestion, getQuestion } from '../controllers/question.js'

const router = express.Router()

router.get("/question", getQuestion)
// router.post("/question/create", createQuestion)

export default router