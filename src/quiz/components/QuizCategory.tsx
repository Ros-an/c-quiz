import React from "react";
import { Heading } from "@chakra-ui/react";
import { SimpleGrid, Box, Center } from "@chakra-ui/react";
import { useGlobalContext } from "../../context-api/GlobalContext";
import "./QuizCategory.css";
export type CategoryList = {
  id: number;
  categoryName: string;
  value: string;
};
const categoryList: CategoryList[] = [
  { id: 1, categoryName: "Array", value: "array" },
  { id: 2, categoryName: "String", value: "string" },
  { id: 3, categoryName: "Stack & \n Queue", value: "stack-queue" },
  {
    id: 4,
    categoryName: "Operator & \n Precedence",
    value: "operator-precedence",
  },
];
function QuizCategory() {
  const { categorySelect } = useGlobalContext();
  return (
    <section className="homepage-body">
      <Heading as="h3" size="lg" ml="1.25rem" mt="0.5rem">
        Quiz Categories
      </Heading>
      <SimpleGrid columns={2} spacingX="20px" spacingY="20px" m="1rem 1.25rem">
        {categoryList.map((item) => {
          return (
            <Box
              bg="white"
              boxShadow="base"
              minH="10rem"
              borderRadius="1rem"
              key={item.id}
            >
              <Center
                h="100%"
                className="homepage-body__box"
                onClick={() => categorySelect(item.value)}
              >
                {item.categoryName.split("\n")[0]} <br />{" "}
                {item.categoryName.split("\n")[1]}
              </Center>
            </Box>
          );
        })}
      </SimpleGrid>
    </section>
  );
}

export default QuizCategory;
