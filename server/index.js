import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import questionRoutes from './routes/question.js'
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import errorHandler from "./middleware/error.js"
// import Question from "./models/questions.js"
// import rawData from "./database/database.js"

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
app.use(express.static('build'))
app.use(requestLogger)
app.use(errorHandler)

//ROUTES

app.use("/api", questionRoutes)
app.use("/auth", authRoutes)
app.use("/home", userRoutes)

const PORT = process.env.PORT;
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