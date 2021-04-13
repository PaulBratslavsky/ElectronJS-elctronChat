import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import ButtonLink from "../ButtonLink";

export default function NavBar({
  isAuthenticated,
  setIsAuthenticated,
}) {
  const history = useHistory();

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          {isAuthenticated && (
            <ButtonLink
              styles="btn btn-sm btn-outline-success ml-2 flex"
              text="Settings"
              to="/settings"
            />
          )}
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>

          {isAuthenticated && (
            <Button
              styles="btn btn-sm btn-outline-danger ml-2"
              text="Logout"
              onClick={() => setIsAuthenticated(false)}
            />
          )}

          {!isAuthenticated && (
            <Button
              styles="btn btn-sm btn-outline-success ml-2"
              text="Login"
              onClick={() => setIsAuthenticated(true)}
            />
          )}
        </div>
      </nav>
    </div>
  );
}
