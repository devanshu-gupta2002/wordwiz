import {useState, useEffect} from "react"
import questionServices from "../services/question.js"
import { useNavigate } from "react-router-dom"

const QuestionDisplay = () => {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const loggedUserData = window.localStorage.getItem('localSavedUserData')
    if(loggedUserData){
      const user = JSON.parse(loggedUserData)
      console.log(user)
      questionServices.setToken(user.token)
      questionServices.getAll().then((response) => setQuestions(response))
      }
    else {
      navigate("/")
    }
    }, [])

    // useSelector(state => {
    //   questionServices
    //     .getAll(state.auth.token)
    //     .then((response) => {
    //       // console.log(response)
    //       setQuestions(response)
    //     })
    //     .catch((err) => {
    //       console.log("error fetching questions", err)
    //     })
    // })
    
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
  }

  // console.log(questions)

  return (
    <>
    <div className=" flex p-8 items-center justify-center bg-blue-500 text-3xl">WordsWiz!</div>
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div>
        {questions.map((question) => (
          <div key={question._id}>
            <p>{question.questionText}</p>
            <ul>
              {question.options.map((option) => (
              <li key={option._id}>
                <input  
                    type="radio"
                    name={question._id}
                    onChange={() => {handleCheckboxChange(question._id, option._id)}}
                  />
                  {option.optionText}
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
