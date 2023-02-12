import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { State } from "./State";

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string): string => str,
        };
    },
}));

describe("State component", () => {
    it("renders loading state", () => {
        render(<State type="loading" title="Loading" text="Please wait" />);

        const loadingSpinner = screen.getByTestId("loading-spinner");
        expect(loadingSpinner).toBeInTheDocument();
    });

    it("renders welcome state", () => {
        render(
            <BrowserRouter>
                <State
                    type="welcome"
                    title="Welcome"
                    text="Please select a dashboard to continue"
                />
            </BrowserRouter>
        );

        const welcomeMessage = screen.getByText("Welcome");
        expect(welcomeMessage).toBeInTheDocument();

        const dashboardButton = screen.getByText("Please select a dashboard to continue");
        expect(dashboardButton).toBeInTheDocument();

        const dashboardIcon = screen.getByTestId("dashboard-icon");
        expect(dashboardIcon).toBeInTheDocument();
    });

    it("renders error state", () => {
        render(<State type="error" title="Error" text="An error has occurred" />);

        const errorMessage = screen.getByText("Error");
        expect(errorMessage).toBeInTheDocument();

        const errorIcon = screen.getByTestId("error-icon");
        expect(errorIcon).toBeInTheDocument();
    });

    it("renders empty state", () => {
        render(<State type="empty" title="No data" text="No data available" />);

        const emptyMessage = screen.getByText("No data");
        expect(emptyMessage).toBeInTheDocument();

        const emptyIcon = screen.getByTestId("empty-icon");
        expect(emptyIcon).toBeInTheDocument();
    });
});
