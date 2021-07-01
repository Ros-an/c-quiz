import React, { createContext, useContext, useState } from "react";
import axios, { AxiosError } from "axios";
export type Questions = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
export type ResponseData = {
  success: boolean;
  question: Questions[];
};
export type GlobalContextType = {
  loading: boolean;
  questions: Questions[];
  correct: number;
  index: number;
  categorySelect: any;
};
export type ServerError = {
  success: false;
  message: string;
  errorMessage: string;
};
export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Questions[] | []>([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState("");

  async function fetchQuestions(url: string) {
    setLoading(true);
    try {
      const response = await axios.get<ResponseData>(url);
      console.log(response.data);
      if (response.data.success && response.status === 200) {
        setQuestions(response.data.question);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const serverError = err as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          setError(serverError.response.data.message);
        }
      }
    }
    setLoading(false);
  }
  const categorySelect = (value: string) => {
    console.log(value);
    const url = `https://quiz-backend.rosan.repl.co/api/categories/${value}`;
    fetchQuestions(url);
  };
  return (
    <GlobalContext.Provider
      value={{
        loading,
        questions,
        index,
        correct,
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
