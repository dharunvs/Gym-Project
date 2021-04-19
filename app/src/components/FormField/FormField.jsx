import { Field, ErrorMessage } from "formik";
import "./FormField.css";

export function FormField({ name, label, type = "text" }) {
  return (
    <label>
      {label}
      <Field className="form-field" type={type} name={name} />
      <div className="error-container">
        <ErrorMessage className="error" component="div" name={name} />
      </div>
    </label>
  );
}

export function ServerError({ serverError }) {
  return (
    <div className="error-container">
      <div className="error">{serverError}</div>
    </div>
  );
}
