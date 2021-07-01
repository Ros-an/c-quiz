import "./Header.css";
import { Heading } from "@chakra-ui/react";
import Navbar from "./Navbar";
function Header() {
  return (
    <header className="head-section">
      <Navbar />
      <div className="head-section__board">
        <Heading as="h1" mb="0.5rem">
          Programming Quiz
        </Heading>
        <Heading as="h2">Play, Learn {"&"} Win</Heading>
      </div>
    </header>
  );
}

export default Header;
