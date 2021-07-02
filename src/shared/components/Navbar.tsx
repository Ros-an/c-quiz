import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Text } from "@chakra-ui/react";
import { Avatar, WrapItem } from "@chakra-ui/react";

function Navbar() {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0<any>();
  console.log(user);
  return (
    <nav className="head-section__nav">
      {!isAuthenticated && (
        <div className="title">
          <Text fontSize="2xl">C Quiz</Text>
        </div>
      )}

      <div className="user-info">
        <WrapItem>
          {isAuthenticated && user.picture && (
            <Avatar name={user.nickname} src={user.picture} />
          )}
        </WrapItem>
        {isAuthenticated && user.nickname && (
          <Text fontSize="1xl" ml="0.5rem">
            {`Welcome, `}
            <strong>{`${user.name.toUpperCase()}`}</strong>
          </Text>
        )}
      </div>
      <div className="access-control">
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect()}>
            <i className="fas fa-sign-in-alt"></i>
            {` Log In`}
          </button>
        )}
        {"  "}
        {isAuthenticated && (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            <i className="fas fa-sign-out-alt"></i>
            {` Log Out`}
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
