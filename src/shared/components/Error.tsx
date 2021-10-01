import React from "react";
import { Text } from "@chakra-ui/react";

const customStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column" as const,
  alignItems: "center",
  background: "var(--color-lightwhite)",
};
function Error() {
  return (
    <div style={customStyle}>
      <Text fontSize="1xl">
        Oops!.. something went wrong. Refresh the page and try again!
      </Text>
    </div>
  );
}

export default Error;
