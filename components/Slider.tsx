import styles from "./Slider.module.css";
import { useEffect, useState } from "react";

export interface SliderOption {
  label: string;
  id: string;
}

interface SliderProps {
  leftOption: SliderOption;
  rightOption: SliderOption;
  selectFn: (selectedOption: SliderOption) => void;
  defaultOption?: SliderOption;
}

export default function Slider({
  leftOption,
  rightOption,
  selectFn,
  defaultOption = leftOption,
}: SliderProps) {
  const [selected, setSelected] = useState(defaultOption);

  function onClick(selectedOption: SliderOption) {
    if (selected.id != selectedOption.id) {
      setSelected(selectedOption);
      selectFn(selectedOption);
    }
  }

  useEffect(() => {
    setSelected(defaultOption);
  }, [defaultOption]);

  return (
    <>
      <div className={styles.slider}>
        <div
          className={
            selected.id === leftOption.id
              ? [styles.leftValue, styles.selected].join(" ")
              : styles.leftValue
          }
          role="option"
          aria-selected={selected.id === leftOption.id}
          onClick={() => onClick(leftOption)}
        >
          {leftOption.label}
        </div>
        <div
          className={
            selected.id === rightOption.id
              ? [styles.rightValue, styles.selected].join(" ")
              : styles.rightValue
          }
          role="option"
          aria-selected={selected.id === rightOption.id}
          onClick={() => onClick(rightOption)}
        >
          {rightOption.label}
        </div>
      </div>
    </>
  );
}
