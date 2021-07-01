import React from "react";
import ReactDOM from "react-dom";
import { GlobalContextProvider } from "./context-api/GlobalContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </GlobalContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
