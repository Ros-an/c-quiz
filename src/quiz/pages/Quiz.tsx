import { useState, useEffect, useCallback } from "react";
import { useGlobalContext } from "../../context-api/GlobalContext";
import Loader from "../../shared/components/Loader";
import QuizQuestion from "../components/QuizQuestion";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Questions,
  ServerError,
  ResponseData,
} from "../../context-api/GlobalContext";
import axios, { AxiosError } from "axios";

import "./Quiz.css";

function Quiz() {
  const { setError, setQuestions } = useGlobalContext();
  const { isAuthenticated } = useAuth0();
  let navigate = useNavigate();
  const { quizname } = useParams();
  const [quiz, setQuiz] = useState<Questions[] | []>([]);

  const fetchQuestions = useCallback(async () => {
    try {
      const response = await axios.get<ResponseData>(
        `https://quiz-backend.rosan.repl.co/api/categories/${quizname}`
      );
      console.log(response.data);
      if (response.data.success && response.status === 200) {
        setQuiz(response.data.questions);
        setQuestions(response.data.questions);
      } else {
        setError(true);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const serverError = err as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          console.log(serverError.response.data);
        }
      }
      setError(true);
      console.log("error found", err);
    }
  }, [quizname, setError, setQuestions]);

  if (!isAuthenticated) {
    navigate(`/`, { replace: true });
  }
  useEffect(() => {
    console.log("quiz page");
    if (isAuthenticated) {
      fetchQuestions();
    }
  }, [quizname, isAuthenticated, fetchQuestions]);
  return <>{!quiz.length ? <Loader /> : <QuizQuestion questions={quiz} />}</>;
}

export default Quiz;
