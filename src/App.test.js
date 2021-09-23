import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from './pages/Login/index'
import { Formik } from 'formik'

test("should have validation error given input field is touched and error exists on form", async () => {
    const fieldName = "email";
    const labelName = "email";
    const { getByLabelText, findByTestId } = render(
      <Formik
        validate={values => {
          let errors = {};
  
          if (!values.firstName) {
            errors.firstName = "Required.";
          }
  
          return errors;
        }}
      >
        <Form fieldName={fieldName} labelName={labelName} />
      </Formik>
    );
  
    const input = getByLabelText(labelName);
  
    // Call blur without inputting anything which should trigger a validation error
    fireEvent.blur(input);
  
    const validationErrors = await findByTestId(`errors-${fieldName}`);
  
    expect(validationErrors.innerHTML).toBe("Required.");
  });