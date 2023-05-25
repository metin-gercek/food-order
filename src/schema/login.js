import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.-])/,
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
)});
