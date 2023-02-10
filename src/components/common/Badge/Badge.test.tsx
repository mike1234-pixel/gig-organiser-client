import { render } from "@testing-library/react";
import { Badge, BadgeProps } from "./Badge";

describe("Badge", () => {
    let props: BadgeProps = {
        children: "Test Badge",
    }

    it("renders with default styles", () => {
        const { getByText } = render(<Badge {...props} />);
        const badgeElement = getByText("Test Badge");

        expect(badgeElement).toHaveClass("root");
    });

    it("renders with variant styles", () => {
        props.variant = "warning";
        const { getByText } = render(<Badge {...props} />);
        const badgeElement = getByText("Test Badge");

        expect(badgeElement).toHaveClass("root");
        expect(badgeElement).toHaveClass("warning");
    });
});
