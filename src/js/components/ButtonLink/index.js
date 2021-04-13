import React from "react";
import { Link } from 'react-router-dom'

export default function ButtonLink({ styles, text, to, ...rest }) {
  return (
    <Link to={to} className={styles} {...rest}>
      {text}
    </Link>
  );
}
