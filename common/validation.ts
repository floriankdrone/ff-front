import * as yup from "yup";

export default {
  email: yup.string().email(),
  password: yup
    .string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  checked: yup.boolean().oneOf([true], "This box needs to be checked"),
};
