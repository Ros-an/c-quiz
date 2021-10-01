import React from "react";
import "./ScoreBoard.css";
import Trophy from "../../assets/trophy.svg";
import { Heading, Text, Button } from "@chakra-ui/react";
import { useGlobalContext } from "../../context-api/GlobalContext";
import { Navigate, Link } from "react-router-dom";
function ScoreBoard() {
  const { questions, correct, resetScore } = useGlobalContext();

  const score = (): number | string => {
    if (correct > 8) {
      return correct;
    }
    return `0${correct}`;
  };
  return (
    <>
      {!questions.length ? (
        <Navigate to="/" replace />
      ) : (
        <section className="scoreboard">
          <Heading as="h3">Quiz Result</Heading>
          <div className="trophy">
            <img src={Trophy} alt="trophy" />
          </div>
          <Heading as="h2">Congratulations!</Heading>
          <Text fontSize="2xl">YOUR SCORE</Text>
          <Heading as="h1">
            <span>{score()}</span>
            <span>/{questions.length}</span>
          </Heading>
          <Link to="/">
            <Button
              colorScheme="gray"
              color="black"
              variant="solid"
              p="1rem 5rem"
              fontSize="1.25rem"
              onClick={() => resetScore()}
              mb="1rem"
            >
              Play Again
            </Button>
          </Link>
          <Link
            to={`/solution/${questions[0].category}`}
            className="see-solution"
          >
            See Solution
          </Link>
        </section>
      )}
    </>
  );
}

export default ScoreBoard;
