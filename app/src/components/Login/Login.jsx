import { Formik, Form } from "formik";
import { useHistory } from "react-router";
import { FormField, ServerError } from "../FormField/FormField";
import "./Login.css";

function Login() {
  const history = useHistory();

  const login = () => {
    console.log("Login");
  };
  return (
    <div className="auth-form-container">
      <h1>Log in</h1>
      <Formik
        onSubmit={login}
        validateOnMount={true}
        initialValues=""
        validationSchema=""
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
      <ServerError serverError={"serverError"} />
    </div>
  );
}

export default Login;
