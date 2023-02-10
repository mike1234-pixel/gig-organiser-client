import { render, fireEvent } from "@testing-library/react";
import { ActionButton } from "./ActionButton";

describe("ActionButton", () => {
    it("renders the edit variant icon", () => {
        const { getByTestId } = render(<ActionButton variant="edit" />);
        expect(getByTestId("edit")).toBeInTheDocument();
    });

    it("renders the delete variant icon", () => {
        const { getByTestId } = render(<ActionButton variant="delete" />);
        expect(getByTestId("delete")).toBeInTheDocument();
    })

    it("calls the onClick prop when the button is clicked", () => {
        const onClick = jest.fn();
        const { getByTestId } = render(<ActionButton variant="edit" onClick={onClick} />);
        const button = getByTestId("action-button");
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});
