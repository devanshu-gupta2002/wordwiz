import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import questionRoutes from './routes/question.js'
import { getQuestion, createQuestion } from "./controllers/question.js"
import Question from "./models/questions.js"
import rawData from "./database.js"

const app = express()
dotenv.config();
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(cors())
app.use(express.json())
app.use(requestLogger)

//ROUTES

app.get('/', (request, response) => {
  response.send(`<p>hello world</p>`)
  // response.send(rawData[0])
})


app.use("/", questionRoutes)

const PORT = process.env.PORT || 3001;
mongoose
	.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    /* ADD DATA ONE TIME */
    // Question.insertMany(rawData)

  })
  .catch((error) => console.log(`${error} did not connect`));