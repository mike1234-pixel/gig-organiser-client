import { render, fireEvent } from "@testing-library/react";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  test("content is visible when button clicked", async () => {
    const title = "Title";
    const content = "Content";
    const { getByText } = render(<Accordion title={title} content={content} />);

    fireEvent.click(getByText(title));
    expect(getByText("Content")).toHaveClass("accordionContentActive");
  });
});
