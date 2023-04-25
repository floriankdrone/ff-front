import styles from "./Checkbox.module.css";

interface CheckboxProps {
  inputProps: any;
  label: String;
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <div className={styles["checkbox-wrapper-24"]}>
      <input
        type="checkbox"
        id="check-24"
        name="check"
        value=""
        {...props.inputProps}
      />
      <label htmlFor="check-24">
        <span></span>
        {props.label}
      </label>
    </div>
  );
}
