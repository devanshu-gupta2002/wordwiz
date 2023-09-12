import QuestionDisplay from "./components/QuestionDisplay";
import EnglishQuestion from "./components/EnglishQuestion";
import GermanQuestion from "./components/GermanQuestion";
import FrenchQuestion from "./components/FrenchQuestion";
import SpanishQuestion from "./components/SpanishQuestion";
import AuthPage from "./components/Login";
import HomePage from "./components/Home";
import {
  BrowserRouter as Router,
  Routes, Route,
} from "react-router-dom"

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/question/english" element={<EnglishQuestion />} />
        <Route path="/question/french" element={<FrenchQuestion />} />
        <Route path="/question/spanish" element={<SpanishQuestion />} />
        <Route path="/question/german" element={<GermanQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
