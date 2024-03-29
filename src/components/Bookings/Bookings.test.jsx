import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Bookings from "./Bookings.jsx";

describe("Bookings Component", () => {
  it("renders a main element", () => {
    render(<Bookings />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });

  it("displays the loading message initially", () => {
    render(<Bookings />);
    const loadingMessage = screen.getByText("Loading Information Please Wait...");
    expect(loadingMessage).toBeInTheDocument();
  });

  it("hides the loading message when booking data is rendered", async () => {
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: async() => [{ id: 1, name: "John Doe" }] ,
      });
    
    render(<Bookings />);
    await waitFor(() => {
      const loadingMessage = screen.queryByText('Loading Information Please Wait...');
      expect(loadingMessage).not.toBeInTheDocument();
    });
  });
});
