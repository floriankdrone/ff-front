import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import validator from "../common/validation";
import api from "../common/api";
import styles from "./SignupForm.module.css";

const schema = yup
  .object({
    email: validator.email.required(),
    password: validator.password.required(),
    acceptTermsOfUse: validator.checked.required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function SignupForm() {
  const id = "signup-form";
  const classNames = "form";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    api.post("authentication/create", data);
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
          <input
            type="checkbox"
            className={styles.termOfUseCheckbox}
            {...register("acceptTermsOfUse")}
          />
          <label className={styles.termOfUseLabel}>Accept Terms Of Use</label>
          {errors.acceptTermsOfUse && (
            <p role="alert">{errors.acceptTermsOfUse?.message}</p>
          )}
        </div>
        <div className={styles.formSection}>
          <input
            type="submit"
            className={styles.signupButton}
            value="Sign Up"
          />
        </div>
      </form>
    </div>
  );
}
