import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Slider, { SliderOption } from "../../components/Slider";

describe("Slider", () => {
  const leftOption: SliderOption = {
    label: "Sign Up",
    id: "signup",
    default: true,
  };
  const rightOption: SliderOption = {
    label: "Login",
    id: "login",
    default: false,
  };

  it("renders the slider", () => {
    const selectFn = jest.fn();

    render(
      <Slider
        leftOption={leftOption}
        rightOption={rightOption}
        selectFn={selectFn}
      />
    );

    const leftOptionComponent = screen.getByText(leftOption.label);
    expect(leftOptionComponent).toBeInTheDocument();
    const rightOptionComponent = screen.getByText(rightOption.label);
    expect(rightOptionComponent).toBeInTheDocument();
  });

  it("switches the slider option", () => {
    const selectFn = jest.fn();

    render(
      <Slider
        leftOption={leftOption}
        rightOption={rightOption}
        selectFn={selectFn}
      />
    );

    const leftOptionComponent = screen.getByText(leftOption.label);
    expect(leftOptionComponent).toBeInTheDocument();
    const rightOptionComponent = screen.getByText(rightOption.label);
    expect(rightOptionComponent).toBeInTheDocument();

    expect(selectFn).not.toBeCalled();
    fireEvent.click(rightOptionComponent);
    expect(screen.getByRole("option", { selected: true })).toBe(
      rightOptionComponent
    );
    expect(screen.getByRole("option", { selected: false })).toBe(
      leftOptionComponent
    );
    expect(selectFn).toBeCalledTimes(1);
    fireEvent.click(leftOptionComponent);
    expect(screen.getByRole("option", { selected: false })).toBe(
      rightOptionComponent
    );
    expect(screen.getByRole("option", { selected: true })).toBe(
      leftOptionComponent
    );
    expect(selectFn).toBeCalledTimes(2);
    fireEvent.click(leftOptionComponent);
    expect(screen.getByRole("option", { selected: false })).toBe(
      rightOptionComponent
    );
    expect(screen.getByRole("option", { selected: true })).toBe(
      leftOptionComponent
    );
    expect(selectFn).toBeCalledTimes(2);
  });
});
