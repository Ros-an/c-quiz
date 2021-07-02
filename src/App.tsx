import React from "react";
import Home from "./quiz/pages/Home";
import Loader from "./shared/components/Loader";
import { useGlobalContext } from "./context-api/GlobalContext";
import QuizStart from "./quiz/pages/QuizStart";
import Quiz from "./quiz/pages/Quiz";
import ScoreBoard from "./quiz/pages/ScoreBoard";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./shared/components/PageNotFound";
import Error from "./shared/components/Error";
import Solutions from "./quiz/pages/Solutions";
function App() {
  const { loading, error } = useGlobalContext();
  console.log(error);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizstart" element={<QuizStart />} />
          <Route path="/quiz/:quizname" element={<Quiz />} />
          <Route path="/scoreboard" element={<ScoreBoard />} />
          <Route path="/solution/:quizname" element={<Solutions />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
