import { useState } from "react";
import { useHistory } from "react-router";
import fb from "../../service/firebase";
import { Formik, Form } from "formik";
import { validationSchema, defaultValues } from "./formikConfig";
import { FormField, ServerError } from "../FormField/FormField";
import { currentUser } from "../../hooks/currentUser";
import "../../styles/authForm.css";

function Login() {
  const history = useHistory();
  const [serverError, setServerError] = useState("");

  function login({ email, password }, { setSubmitting }) {
    fb.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        currentUser(res);
        if (!res.user) {
          setServerError("Trouble logging in.");
        }
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setServerError("Incorrect password");
        } else if (err.code === "auth/user-not-found") {
          setServerError("Email not registered");
        } else {
          serverError("Something went wrong");
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  }
  return (
    <div className="auth-form-container">
      <h1>Log in</h1>
      <Formik
        onSubmit={login}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField label="Email" name="email" />
            <FormField label="Password" name="password" />

            <button
              className="auth-button"
              disabled={isSubmitting || !isValid}
              type="submit"
            >
              Login
            </button>
            <div className="auth-link-container">
              Don't have an account?{" "}
              <span
                className="auth-link"
                onClick={() => {
                  history.push("register");
                }}
              >
                Register
              </span>
            </div>
          </Form>
        )}
      </Formik>
      <ServerError serverError={serverError} />
    </div>
  );
}

export default Login;
