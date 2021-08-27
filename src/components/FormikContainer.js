import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Col, Container, Row } from "react-bootstrap";

function FormikContainer() {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "option1", value: "option1" },
    { key: "option2", value: "option2" },
    { key: "option3", value: "option3" },
  ];

  const radioOptions = [
    { key: "option1", value: "rOption1" },
    { key: "option2", value: "rOption2" },
    { key: "option3", value: "rOption3" },
  ];

  const checkboxOptions = [
    { key: "option1", value: "cOption1" },
    { key: "option2", value: "cOption2" },
    { key: "option3", value: "cOption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: "",
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("onSubmit", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <Container>
            <br />
            <Row>
              <FormikControl control="input" label="email" name="email" />
            </Row>
            <br />
            <Row>
              <FormikControl
                control="textarea"
                label="Description"
                name="description"
              />
            </Row>
            <br />
            <Row>
              <FormikControl
                control="select"
                label="Select an option"
                name="selectOption"
                options={dropdownOptions}
              />
            </Row>
            <br />
            <Row>
              <FormikControl
                control="radio"
                label="Select a radio option"
                name="radioOption"
                options={radioOptions}
              />
            </Row>
            <br />
            <Row>
              <FormikControl
                control="checkbox"
                label="Select options"
                name="checkboxOption"
                options={checkboxOptions}
              />
            </Row>
            <br />
            <Row>
              <FormikControl
                control="date"
                label="Pick a date"
                name="birthDate"
              />
            </Row>
            <br />

            <Row>
              <Col xs={5}>
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
