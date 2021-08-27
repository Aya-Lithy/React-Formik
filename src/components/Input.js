import { ErrorMessage, Field } from "formik";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextError from "./TextError";

function Input(props) {
  const { label, name, ...rest } = props;

  return (
    <Container className="form-group">
      <Row>
        <Col xs={2} className="d-flex justify-content-between">
          <label htmlFor={name}>{label}</label>
        </Col>
        <Col xs={5}>
          <Field className="form-control" id={name} name={name} {...rest} />
        </Col>
      </Row>

      <Row>
        <Col xs={2}></Col>
        <Col xs={5}>
          <ErrorMessage name={name} component={TextError} />
        </Col>
      </Row>
    </Container>
  );
}

export default Input;
