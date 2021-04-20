import * as yup from "yup";

export const defaultValues = {
  email: "",
  password: "",
};

export const validationSchema = yup.object().shape({
  email: yup.string().required("Required").email("Invalid email"),
  password: yup.string().required("Required"),
});
