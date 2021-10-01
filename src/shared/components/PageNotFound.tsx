import React from "react";
import { Link } from "react-router-dom";
import { Text, Button } from "@chakra-ui/react";

const customStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column" as const,
  alignItems: "center",
  background: "var(--color-lightwhite)",
};
function PageNotFound() {
  return (
    <div style={customStyle}>
      <Text fontSize="3xl">404 | NOT FOUND</Text>
      <Link to="/">
        <Button colorScheme="facebook" variant="solid">
          Home Page
        </Button>
      </Link>
    </div>
  );
}

export default PageNotFound;
