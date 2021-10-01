import React from "react";
import "./QuizStart.css";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { Heading, Text, Button } from "@chakra-ui/react";
import { useGlobalContext } from "../../context-api/GlobalContext";
function QuizStart() {
  const { questions } = useGlobalContext();
  let navigate = useNavigate();

  return (
    <div className="quizstart-gateway">
      {!questions.length ? (
        <Navigate to="/" replace />
      ) : (
        <section className="box">
          <Heading as="h2" mb="2rem">
            Quiz Name
          </Heading>

          <Heading as="h1">{questions[0].category.toUpperCase()}</Heading>
          <Text fontSize="2xl" mb="2.5rem">
            Number of Questions: {questions.length}
          </Text>
          <Text fontSize="1xl" mb="0.5rem">
            Are you ready to play?
          </Text>
          <div className="buttons">
            <Button
              colorScheme="teal"
              size="lg"
              variant="outline"
              onClick={() => navigate("/")}
              mr="0.5rem"
             >
              No
            </Button>
            <Link to={`/quiz/${questions[0].category}`}>
              <Button colorScheme="teal" size="lg">
                Let's go
              </Button>{" "}
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

export default QuizStart;
