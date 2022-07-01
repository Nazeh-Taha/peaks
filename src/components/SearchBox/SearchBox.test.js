import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBox from "./index";

describe("SearchBox component test", () => {
  const setup = (labelText) => {
    const utils = render(<SearchBox />);
    const input = screen.getByPlaceholderText(labelText);
    return { input, ...utils };
  };
  test("render without crashing", () => {
    render(<SearchBox />);
  });

  test("render with expected text", () => {
    render(<SearchBox />);
    expect(screen.getByPlaceholderText("Search all news")).toBeInTheDocument();
  });

  test("baseline input should contain the value of the search", async () => {
    const { input } = setup("Search all news");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
});
