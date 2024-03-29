import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";
import Bookings from "../../Bookings/Bookings";

test("Given a searchInput field with input values entered", () => {
  render(<Search search={() => {}} />);
  const inputElement = screen.getByPlaceholderText("Customer name");
  fireEvent.change(inputElement, { target: { value: "Search Name" } });
  expect(inputElement.value).toBe("Search Name");
  expect(inputElement).toBeInTheDocument();
});

// test("When the form is submitted", () => {
//   function mockSubmit() {}
//   render(<Search search={() => {}} />);
//   const formElement = screen.getByTestId("form");
//   const inputElement = screen.getByPlaceholderText("Customer name");
//   fireEvent.change(inputElement, { target: { value: "Search Name" } });
//   console.info = mockSubmit;
//   fireEvent.submit(formElement);
//   expect(mockSubmit).toHaveBeenCalledWith();
// });
