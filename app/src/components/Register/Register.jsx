import { Formik, Form } from "formik";
import { useHistory } from "react-router";
import { FormField, ServerError } from "../FormField/FormField";

function Register() {
  const history = useHistory();

  const register = () => {
    console.log("Register");
  };

  return (
    <div className="auth-form-container">
      <h1>Register</h1>
      <Formik
        onSubmit={register}
        validateOnMount={true}
        initialValues=""
        validationSchema=""
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField label="Gym name" name="name" />
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
      <ServerError serverError={"serverError"} />
    </div>
  );
}

export default Register;