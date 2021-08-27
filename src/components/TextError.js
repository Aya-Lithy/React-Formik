import React from "react";
import Alert from "react-bootstrap/Alert";

const TextError = (props) => {
  return <Alert variant="danger">{props.children}</Alert>;
};

export default TextError;
