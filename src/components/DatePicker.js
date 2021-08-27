import { ErrorMessage, Field } from "formik";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextError from "./TextError";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {
  const { label, name, ...rest } = props;

  return (
    <Container className="form-group">
      <Row>
        <Col xs={2} className="d-flex justify-content-between">
          <label htmlFor={name}>{label}</label>
        </Col>
        <Col xs={2}>
          <Field className="form-control" id={name} name={name} {...rest}>
            {({ form, field }) => {
              const { setFieldValue } = form;
              const { value } = field;

              return (
                <DateView
                  id={name}
                  {...field}
                  {...rest}
                  selected={value}
                  onChange={(val) => setFieldValue(name, val)}
                />
              );
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

export default DatePicker;
