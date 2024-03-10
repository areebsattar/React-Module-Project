import Footer from "./Footer.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("renders the footer at the bottom of the page with each address property as a list item", () => {
    const details = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789",
    ];

    render(<Footer details={details} />);

    const footer = screen.getByRole("contentinfo");
    const listItems = screen.getAllByRole("listitem");

    expect(footer).toBeTruthy();
    expect(listItems).toHaveLength(details.length);

    details.forEach((detail, index) => {
      expect(listItems[index]).toHaveTextContent(detail);
    });
  });
});
