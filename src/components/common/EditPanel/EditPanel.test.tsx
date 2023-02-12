import { render, fireEvent, waitFor } from "@testing-library/react";
import { EditPanel } from "./EditPanel";

describe("EditPanel component", () => {
    it("renders the component with title and children", () => {
        const title = "Edit Panel";
        const children = <div>Some content</div>;
        const { getByText } = render(
            <EditPanel title={title}>{children}</EditPanel>
        );

        expect(getByText(title)).toBeInTheDocument();
        expect(getByText("Some content")).toBeInTheDocument();
    });

    it("toggles the panel open and closed", () => {
        const title = "Edit Panel";
        const { getByText, getByTestId } = render(
            <EditPanel title={title}>Some content</EditPanel>
        );

        expect(getByTestId("edit-panel").classList.contains("containerOpen")).toBe(false);

        fireEvent.click(getByText(title));
        waitFor(() => {
            expect(getByTestId("edit-panel").classList.contains("containerOpen")).toBe(true);
        })

        fireEvent.click(getByTestId('close'));
        expect(getByTestId("edit-panel").classList.contains("containerOpen")).toBe(false);
    });

});
