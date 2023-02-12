import { render, fireEvent, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { FlyingHorse } from "./FlyingHorse";
import { FlyingHorseAnimationContext } from "../../../context/Animation/FlyingHorseAnimationContext";

const TestProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {
    return <FlyingHorseAnimationContext.Provider value={{ animationTriggered: true, handleAction: jest.fn(), handleAnimationIteration: jest.fn(), setAnimationTriggered: jest.fn() }}>
        {children}
    </FlyingHorseAnimationContext.Provider>
}

describe("FlyingHorse component", () => {
    it("displays the horse", () => {
        const { getByAltText } = render(<FlyingHorse />);
        const horseImg = getByAltText("horse");

        expect(horseImg).toBeInTheDocument();
    });

    it("adds the fly class when animationTriggered is true", () => {
        const { getByAltText } = render(
            <TestProvider>
                <FlyingHorse />
            </TestProvider>
        );
        const horseImg = getByAltText("horse");

        expect(horseImg).toHaveClass("fly");
    });

    it("calls handleAnimationIteration when animation ends", () => {
        const handleAnimationIteration = jest.fn();
        const { getByAltText } = render(
            <TestProvider>
                <FlyingHorse />
            </TestProvider>
        );
        const horseImg = getByAltText("horse");

        fireEvent.animationEnd(horseImg);

        waitFor(() => {
            expect(handleAnimationIteration).toHaveBeenCalled();
        })

    });
});
