import SearchResult from "./SearchResult";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Table", () => {
  it("renders a column for each booking attribute in the table header", () => {
    render(<SearchResult />);

    const tableHead = screen.getByRole("table");
    const tableHeaders = screen.getAllByRole("columnheader");

    expect(tableHead).toBeTruthy();
    expect(tableHeaders).toHaveLength(9);

    
  });

  it("renders more than one booking in the table body", () => {
    render(<SearchResult />);

    const tableBody = screen.getByRole("table");
    const tableRows = screen.getAllByRole("row");

    expect(tableBody).toBeTruthy();
    expect(tableRows.length).toBeGreaterThan(1);
    

  });
});
