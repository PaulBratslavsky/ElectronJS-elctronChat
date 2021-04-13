import React from "react";

export default function Button({ styles, text, onClick, ...rest }) {
  return (
    <button onClick={onClick} className={styles} {...rest}>
      {text}
    </button>
  );
}
