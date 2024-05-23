import TableBody from "../TableBody";
import { render, screen, fireEvent } from "@testing-library/react";

test("Verify that each row of your table can be highlighted (on and off) independently when being clicked.", () => {
  render(
    <table>
      <tbody>
        <TableBody
          id={1}
          title={"tab"}
          name={"he"}
          firstName={"gr"}
          surName={"dj"}
          email={"df"}
          roomId={"kd"}
          checkInDate={"fd"}
          checkOutDate={"v"}
          stayNights={"om"}
        />
      </tbody>
    </table>
  );

  const tableRows = screen.getAllByRole("row");

  tableRows.forEach((row) => {
    fireEvent.click(row);
    expect(row).toHaveClass("selected");
    fireEvent.click(row);
    expect(row).not.toHaveClass("selected");
  });
});
