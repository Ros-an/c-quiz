import React from "react";
import Home from "./quiz/pages/Home";
import Loader from "./shared/components/Loader";
import { useGlobalContext } from "./context-api/GlobalContext";
import { Routes, Route } from "react-router-dom";
function App() {
  // const { loading, questions } = useGlobalContext();
  // console.log(questions);
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
