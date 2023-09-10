import QuestionDisplay from "./components/QuestionDisplay";
import AuthPage from "./components/Login";
import HomePage from "./components/Home";
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import questionService from "./services/question.js"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const loggedUserData = window.localStorage.getItem('localSavedUserData')
    if(loggedUserData){
      const user = JSON.parse(loggedUserData)
      console.log(user)
      questionService.setToken(user.token)
    }
  }, [])
  // console.log("state", state)

  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/question" element={<QuestionDisplay />} />
      </Routes>
    </Router>
      // <QuestionDisplay />
  );
}

export default App;
