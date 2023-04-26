import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import validator from "../common/validation";
import api from "../common/api";
import styles from "./SignupForm.module.css";
import Link from "next/link";
import Checkbox from "./Checkbox";

const schema = yup
  .object({
    email: validator.email.required(),
    password: validator.password.required(),
    acceptTermsOfUse: validator.checked.required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

interface SignupFormProps {
  switchToLoginFn: any;
}

export default function SignupForm({ switchToLoginFn }: SignupFormProps) {
  const id = "signup-form";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    api.post("account/create", data);
  };

  return (
    <div className={styles.form} id={id}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formSection}>
          <label className={styles.label}>email</label>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
        </div>
        <div className={styles.formSection}>
          <label className={styles.label}>password</label>
          <input
            type="password"
            className={styles.input}
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}
        </div>
        <div className={styles.formSection}>
          <Checkbox
            inputProps={register("acceptTermsOfUse")}
            label="I accept the Terms Of Use"
          />
          {errors.acceptTermsOfUse && (
            <p role="alert">{errors.acceptTermsOfUse?.message}</p>
          )}
        </div>
        <div
          className={[styles.formSection, styles.signupButtonSection].join(" ")}
        >
          <input
            type="submit"
            className={styles.signupButton}
            value="Sign Up"
          />
          <Link
            href={{
              pathname: "/authentication",
              query: { action: "login" },
            }}
            onClick={switchToLoginFn}
            className={styles["signup-form"]}
          >
            {"I'm already a member"}
          </Link>
        </div>
      </form>
    </div>
  );
}
