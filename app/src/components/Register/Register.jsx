import { useState } from "react";
import { useHistory } from "react-router";
import fb from "../../service/firebase";
import { Formik, Form } from "formik";
import { validationSchema, defaultValues } from "./formikConfig";
import { FormField, ServerError } from "../FormField/FormField";
import "../../styles/authForm.css";

function Register() {
  const history = useHistory();
  const [serverError, setServerError] = useState("");
  const [reg, setReg] = useState(false);

  function register({ email, gymName, password }, { setSubmitting }) {
    fb.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res?.user?.uid) {
          fb.firestore.collection("gyms").doc(res.user.uid).set({
            email: email,
            name: gymName,
            password: password,
          });
        } else {
          setServerError("Trouble registering. Try again.");
        }
      })
      .catch((err) => {
        if (err) {
          if (err.code === "auth/email-already-in-use") {
            setServerError("Email already exists. Use another email.");
          } else {
            setServerError("Trouble registering. Try again.");
          }
        } else {
          setReg(true);
        }
      })
      .finally(() => {
        setSubmitting(false);
      });

    if (reg) {
      history.push("login");
    }
  }

  return (
    <div className="auth-form-container">
      <h1>Register</h1>
      <Formik
        onSubmit={register}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField label="Gym name" name="gymName" />
            <FormField label="Email" name="email" />
            <FormField label="Password" name="password" type="password" />
            <FormField
              label="Confirm Password"
              name="verifyPassword"
              type="password"
            />

            <button
              className="auth-button"
              disabled={isSubmitting || !isValid}
              type="submit"
            >
              Register
            </button>
            <div className="auth-link-container">
              Already registered?{" "}
              <span
                className="auth-link"
                onClick={() => {
                  history.push("login");
                }}
              >
                Login
              </span>
            </div>
          </Form>
        )}
      </Formik>
      <ServerError serverError={serverError} />
    </div>
  );
}

export default Register;
