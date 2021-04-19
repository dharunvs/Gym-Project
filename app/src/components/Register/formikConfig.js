import * as yup from "yup";

export const defaultValues = {
  gymName: "",
  email: "",
  password: "",
  verifyPassword: "",
};

export const validationSchema = yup.object().shape({
  gymName: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid email"),
  password: yup
    .string()
    .required("Required")
    .min(6, "Must atleast be 6 characters"),
  verifyPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
