import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
export type Questions = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  code: string;
  correct_answer: string;
  options: string[];
};
export type ResponseData = {
  success: boolean;
  questions: Questions[];
};
export type GlobalContextType = {
  loading: boolean;
  questions: Questions[];
  correct: number;
  index: number;
  categorySelect: any;
  nextQuestion: any;
  resetScore: any;
  resetIndex: any;
  increaseScore: any;
  isError: boolean;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<number>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestions: React.Dispatch<React.SetStateAction<[] | Questions[]>>;
};
export type ServerError = {
  success: false;
  message: string;
  errorMessage: string;
};
export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0<any>();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Questions[] | []>([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isError, setError] = useState(false);
  let navigate = useNavigate();

  async function fetchQuestions(url: string) {
    setLoading(true);
    try {
      const response = await axios.get<ResponseData>(url);
      console.log(response.data);
      if (response.data.success && response.status === 200) {
        setQuestions(response.data.questions);
        navigate(`/quizstart`);
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
    setLoading(false);
  }
  const categorySelect = (value: string) => {
    if (isAuthenticated) {
      const url = `https://quiz-backend.rosan.repl.co/api/categories/${value}`;
      fetchQuestions(url);
    } else {
      loginWithRedirect();
    }
  };

  const nextQuestion = () => {
    if (index >= questions.length - 1) {
      navigate("/scoreboard");
    }
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        return 0;
      }
      return index;
    });
  };
  const resetScore = () => {
    setCorrect(0);
  };
  const resetIndex = () => {
    setIndex(0);
  };
  const increaseScore = () => {
    setCorrect((old) => old + 1);
  };
  return (
    <GlobalContext.Provider
      value={{
        setQuestions,
        loading,
        nextQuestion,
        setIndex,
        setCorrect,
        resetScore,
        resetIndex,
        increaseScore,
        questions,
        index,
        correct,
        isError,
        setError,
        categorySelect,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
