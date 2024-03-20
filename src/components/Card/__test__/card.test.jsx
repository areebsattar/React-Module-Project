import Card from "../Card";
import { render, screen } from "@testing-library/react";

test("should render a title", () => {
  render(
    <Card
      title="countryName"
      url="https://example.com"
      image="test-image.jpg"
    />
  );
  const titleElement = screen.getAllByText("countryName");
  expect(titleElement).toBeInTheDocument();
});

test("should render a link with the correct URL", () => {
  render(
    <Card title="Manchester" url="https://example.com" image="test-image.jpg" />
  );
  const linkElement = screen.getByRole("link", { name: "Manchester" });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "https://example.com");
});

test("should render an image with alt text", () => {
  render(
    <Card title="Manchester" url="https://example.com" image="test-image.jpg" />
  );
  const imageElement = screen.getByAltText("Manchester");
  expect(imageElement).toBeInTheDocument();
});
