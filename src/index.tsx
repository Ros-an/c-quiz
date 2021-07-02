import React from "react";
import ReactDOM from "react-dom";
import { GlobalContextProvider } from "./context-api/GlobalContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-p5e8shnz.us.auth0.com"
      clientId="P1Dvcls6tgBIbZUI2tuxF3TGEx6d0AmF"
      redirectUri={window.location.origin}
    >
      <Router>
        <GlobalContextProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </GlobalContextProvider>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
