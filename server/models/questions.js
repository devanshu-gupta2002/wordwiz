import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: [
    {
      optionText: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true
      },
    },
  ],
  language: {
    type: String,
    required: true,
  }
})

const Question = mongoose.model('question', questionSchema)

export default Question