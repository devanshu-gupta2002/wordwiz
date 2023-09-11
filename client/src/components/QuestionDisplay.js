import {useState, useEffect} from "react"
import questionServices from "../services/question.js"
import userServices from "../services/user.js"
import { useNavigate } from "react-router-dom"

const QuestionDisplay = () => {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [currentScore, setCurrentScore] = useState([])
  const [savedUser, setSavedUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const loggedUserData = window.localStorage.getItem('localSavedUserData')
    if(loggedUserData){
      const user = JSON.parse(loggedUserData)
      setSavedUser(user)
      console.log(user)
      questionServices.setToken(user.token)
      userServices.setToken(user.token)
      userServices.getScore(user.user._id).then(response => setCurrentScore(response))
      questionServices.getAll().then((response) => setQuestions(response))
      }
    else {
      navigate("/")
    }
    }, [navigate])

    
  const handleCheckboxChange = (questionId, optionId) => {
    const updatedAnswers = {...answers}
    updatedAnswers[questionId] = optionId
    setAnswers(updatedAnswers)
  }

  const handleSubmit = () => {
    let totalScore = 0
    questions.forEach((question) => {
      const correctOption = question.options.find((option) => option.isCorrect)
      if(answers[question._id] === correctOption._id) {
        totalScore+=1
      }
    })
    setScore(totalScore)
    // console.log(savedUser.user._id)
    // console.log(savedUser.user.score+totalScore)
    // console.log("score", currentScore)
    userServices.updateScore(savedUser.user._id, currentScore.score+totalScore)
    navigate("/home")
  }

  // console.log(questions)

  return (
    <>
      <div className=" flex h-40 bg-[#1f2937] w-full items-center justify-between ">
        <div className="font-extrabold font-mono text-[#ec4899] tracking-tight text-7xl bg-clip-text  mx-4">WordWiz!</div>
      </div>
    <div className="min-h-screen flex items-center justify-center bg-[#566375]">
      <div>
      {questions.map((question, index) => (
        <div key={question._id} className=" p-6">
          <h3 className="mb-4 text-2xl font-semibold text-white">
            {index + 1}: {question.questionText}
          </h3>
          <ul className="w-48 text-xl font-medium rounded-lg bg-gray-700 border-gray-600 text-white">
            {question.options.map((option) => (
              <li key={option._id} className="w-full border-b rounded-t-lg border-gray-600 p-1">
                <input  
                  type="radio"
                  className="w-4 h-4 bg-gray-600 border-gray-500"
                  name={question._id}
                  onChange={() => {handleCheckboxChange(question._id, option._id)}}
                />
                <label className="w-full py-3 ml-2 text-xl font-medium text-gray-300 p-1">
                  {option.optionText}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Submit Answers
            </button>
            {score ? <>{score}</> : <></>}
      </div>
    </div>
    </>
  )
}

export default QuestionDisplay
