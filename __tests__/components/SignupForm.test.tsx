import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SignupForm from "../../components/SignupForm";

describe("SignupForm", () => {
  it("renders the signup form", () => {
    render(<SignupForm />);

    const emailLabel = screen.getByText("email");
    const passwordLabel = screen.getByText("password");
    const emailInput = screen.getByText("password");
    const passwordInput = screen.getByText("password");
    const signupButton = screen.getByRole("button");

    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveAttribute("href", "/authentication?state=login");
  });

  it.skip("renders error in the signup form when missing email", () => {});
  it.skip("renders error in the signup form when password is not correct", () => {});
  it.skip("renders error in the signup form when term of use checkbox is not checked", () => {});
});
