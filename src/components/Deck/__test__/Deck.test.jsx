import Deck from "../Deck";
import { render, screen } from "@testing-library/react";

test(" info cards should be displayed on the page for each city (Glasgow, Manchester, London).", () => {
  render(<Deck />);
  const cardcomponent = screen.getAllByTestId("info cards");
  const manchester = cardcomponent.filter((card) =>
    card.textContent.toLowerCase().includes("manchester")
  );
  const glasgow = cardcomponent.filter((card) =>
    card.textContent.toLowerCase().includes("glasgow")
  );
  const london = cardcomponent.filter((card) =>
    card.textContent.toLowerCase().includes("london")
  );
  expect(manchester.length).toBeGreaterThan(0);
  expect(glasgow.length).toBeGreaterThan(0);
  expect(london.length).toBeGreaterThan(0);
});
test("Each card should link to the correct website.", () => {
  render(<Deck />);
  const cardcomponent = screen.getAllByTestId("info cards");
  cardcomponent.forEach((card) => {
    const linkElement = card.querySelector("a");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href");
  });
});
test("Each card should link to the correct image.", () => {
  render(<Deck />);
  const cardcomponent = screen.getAllByTestId("info cards");
  cardcomponent.forEach((card) => {
    const imageElement = card.querySelector("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src");
  });
});
