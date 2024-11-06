import CareerQuiz from "./Components/QuizPage";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Potato from "./Components/Potato";
import NavBar from "./Components/NavBar";
import QUiz from "./Components/QUiz";
import Footer from "./Components/Footer";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import Stu from "./Components/Stu";
function App() {
  return (
    <Router>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Stu" element={<Stu />} />
          <Route path="/Quiz" element={<QUiz />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<LoginPage />} />
          {/* Add more routes as necessary */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
