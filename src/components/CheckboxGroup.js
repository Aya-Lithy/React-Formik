import { ErrorMessage, Field } from "formik";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextError from "./TextError";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;

  return (
    <Container className="form-group">
      <Row>
        <Col xs={2} className="d-flex justify-content-between">
          <label htmlFor={name}>{label}</label>
        </Col>
        <Col xs={5}>
          <Field className="form-control" id={name} name={name} {...rest}>
            {({ field }) => {
              return options.map((option) => {
                return (
                  <Col xs={2} key={option.key}>
                    <input
                      type="checkbox"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                  </Col>
                );
              });
            }}
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

export default CheckboxGroup;
