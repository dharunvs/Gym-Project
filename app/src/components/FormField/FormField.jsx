import { Field, ErrorMessage } from "formik";
import "../../styles/FormField.css";

export function FormField({ name, label, type = "text" }) {
  return (
    <label>
      <Field
        className="form-field"
        type={type}
        name={name}
        placeholder={label}
      />
      <div className="error-container">
        <ErrorMessage className="error" component="div" name={name} />
      </div>
    </label>
  );
}

export function ServerError({ serverError }) {
  return (
    <div className="error-container">
      {!!serverError && <div className="error">{serverError}</div>}
    </div>
  );
}
