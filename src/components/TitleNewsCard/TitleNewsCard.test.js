import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TitleNewsCard from "./index";

describe("TitleNewsCard component test", () => {
  test("render without crashing", () => {
    render(<TitleNewsCard />);
  });

  test("render with expected text", () => {
    render(<TitleNewsCard cardTitle="test title" />);
    expect(screen.getByText("test title")).toBeInTheDocument();
  });
  test("card click action test", () => {
    const goToArticle = jest.fn();
    render(<TitleNewsCard handleClick={goToArticle} />);
    const card = screen.getByTestId("titleNewsCard-test-id");

    fireEvent.click(card);
    expect(goToArticle).toHaveBeenCalled();
  });
});
