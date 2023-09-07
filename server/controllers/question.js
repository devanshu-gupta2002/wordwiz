import Question from '../models/questions.js'
// import questionsData from '../database/database.js'


export const getQuestion = async(req, res) => {
  try{
    const question = await Question.find()
    res.status(200).json(question)
  } catch (err) {
    console.log(Question.find())
    res.status(404).json({message: err.message})
  }
}

// export const createQuestion = async(req, res) => {
//   try{
//     const insertedQuestions = await Question.insertMany(questionsData)
//     res.status(201).json({message: 'questions inserted succesfully', insertedQuestions})
//   }catch (err) {
//     res.status(404).json({message: err.message})
//   }
// }