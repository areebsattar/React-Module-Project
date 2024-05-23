import Search from "../Search";
import { render, screen, fireEvent } from "@testing-library/react";

test("Given a searchInput", () => {
  render(<Search search={() => {}} />);
  const inputElement = screen.getByPlaceholderText("Customer name");
  expect(inputElement).toBeInTheDocument();
});

test("When I type in the field", () => {
  render(<Search search={() => {}} />);
  const inputElement = screen.getByPlaceholderText("Customer name");
  fireEvent.change(inputElement, { target: { value: "search for customer" } });
  expect(inputElement.value).toBe("search for customer");
});
