import { fireEvent, render, screen } from "@testing-library/react";
import SignupForm from "./components/form/index";
import CustomButton from "./components/buttons";

describe("CustomButton", () => {
  test("renders button correctly", () => {
    render(
      <CustomButton
        title="Click Me"
        btnFunction={() => console.log("Button Clicked")}
        style={{ backgroundColor: "red" }}
        id="custom-button"
      />
    );

    // Test that the button is rendered
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("triggers button click event", () => {
    const handleButtonClick = jest.fn();
    render(
      <CustomButton
        title="Click Me"
        btnFunction={handleButtonClick}
        style={{ backgroundColor: "red" }}
        id="custom-button"
      />
    );

    // Test button click event
    const buttonElement = screen.getByText("Click Me");
    fireEvent.click(buttonElement);
    expect(handleButtonClick).toHaveBeenCalled();
  });
});

describe("SignupForm", () => {
  test("renders form fields correctly", () => {
    render(<SignupForm />);

    // Test that form fields are rendered
    const firstNameInput = screen.getByLabelText("First Name");
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = screen.getByLabelText("Last Name");
    expect(lastNameInput).toBeInTheDocument();

    const emailInput = screen.getByLabelText("Email Address");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
  });

  test("triggers button click event", () => {
    render(<SignupForm />);
  });
});
