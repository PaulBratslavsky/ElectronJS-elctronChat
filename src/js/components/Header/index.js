import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";

export default function Header({ title, withBackButton }) {
  const route = useHistory();
  return (
    <div className="chat-name-container">
      <span className="name">{title}</span>
      {withBackButton && (
        <Button
          styles="btn btn-sm btn-primary ml-2 back-button"
          text="Back"
          onClick={() => route.goBack()}
        />
      )}
    </div>
  );
}
