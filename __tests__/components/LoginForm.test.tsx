import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import LoginForm from "../../components/LoginForm";

describe("LoginForm", () => {
  it("renders the login form", () => {
    render(<LoginForm />);

    const emailLabel = screen.getByText("email");
    const passwordLabel = screen.getByText("password");
    const emailInput = screen.getByText("password");
    const passwordInput = screen.getByText("password");
    const loginButton = screen.getByRole("button");

    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it.skip("renders error in the login form when missing email", () => {});
  it.skip("renders error in the login form when password is not correct", () => {});
  it.skip("renders error in the login form when term of use checkbox is not checked", () => {});
});
