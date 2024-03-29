import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CustomerProfile from "./CustomerProfile";

describe("CustomerProfile", () => {
  it("renders loading state initially", () => {
    render(<CustomerProfile id={1} />);
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });

  it("renders customer profile after data is fetched", async () => {
    global.fetch = () =>
      Promise.resolve({
        json: async () => ({
          id: 1,
          phoneNumber: "+44 1632 960185",
          vip: true,
        }),
      });

    render(<CustomerProfile id={1} />);

    await screen.findByText("+44 1632 960185");

    const phoneNumber = screen.getByText("+44 1632 960185");
    expect(phoneNumber).toBeInTheDocument();
    expect(screen.getByText("VIP Customer")).toBeInTheDocument();
    expect(screen.getByText("ID: 1")).toBeInTheDocument();
  });
});
