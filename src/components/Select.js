import { ErrorMessage, Field } from "formik";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextError from "./TextError";

function Select(props) {
  const { label, name, options, ...rest } = props;

  return (
    <Container className="form-group">
      <Row>
        <Col xs={2}>
          <label htmlFor={name}>{label}</label>
        </Col>
        <Col xs={5}>
          <Field
            as="select"
            className="form-control"
            id={name}
            name={name}
            {...rest}
          >
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              );
            })}
          </Field>
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

export default Select;
