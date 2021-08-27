import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Col, Container, Row } from "react-bootstrap";

function FormikContainer() {
  const initialValues = {
    email: "",
    description: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    description: Yup.string().required("Required"),
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
