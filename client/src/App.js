import QuestionDisplay from "./components/QuestionDisplay";
import AuthPage from "./components/Login";
import HomePage from "./components/Home";
import {
  BrowserRouter as Router,
  Routes, Route,
} from "react-router-dom"
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setLogin } from "./reducers/authReducer";

const App = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const loggedUserData = window.localStorage.getItem("localSavedUserData")
  //   if(loggedUserData){
  //     const loggedIn = JSON.parse(loggedUserData)
  //     dispatch(
  //       setLogin({
  //         user: loggedIn.user,
  //         token: loggedIn.token,
  //       })
  //     )
  //   }
  // })


  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/question" element={<QuestionDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
