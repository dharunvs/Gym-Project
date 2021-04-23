import * as yup from "yup";

export const defaultValues = {
  email: "dharunsivakumar002@gmail.com",
  password: "Dharun@123",
};

export const validationSchema = yup.object().shape({
  email: yup.string().required("Required").email("Invalid email"),
  password: yup.string().required("Required"),
});
