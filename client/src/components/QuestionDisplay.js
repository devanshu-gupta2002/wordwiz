import {useState, useEffect} from "react"
import axios from "axios"

const QuestionDisplay = () => {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    axios.get('/api/question')
      .then((response) => {
        setQuestions(response.data)
      })
      .catch((err) => {
        console.log("error fetching questions", err)
      })
    }, [])
    // console.log(questions)
    
  const handleCheckboxChange = (questionId, optionId) => {
    const updatedAnswers = {...answers}
    updatedAnswers[questionId] = optionId
    setAnswers(updatedAnswers)
  }
  console.log(answers)

  return (
    <div>
      <h1>Language Learning Quiz</h1>
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
      </div>
    </div>
  )
}

export default QuestionDisplay
