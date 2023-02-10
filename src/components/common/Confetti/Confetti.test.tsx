import { render, screen } from '@testing-library/react';
import { ConfettiAnimationContext } from '../../../context/Animation/ConfettiAnimationContext';
import { ConfettiEffect } from './Confetti';

describe('ConfettiEffect component', () => {
    it('should not render if renderConfetti is false', () => {
        render(
            <ConfettiAnimationContext.Provider value={{ renderConfetti: false, resetRenderConfetti: jest.fn, confettiPieces: 0, setConfettiPieces: jest.fn }}>
                <ConfettiEffect />
            </ConfettiAnimationContext.Provider>
        );

        expect(screen.queryByTestId('confetti')).not.toBeInTheDocument();
    });

    it('should render the correct number of confetti pieces', () => {

        const confettiPieces = 100

        const confetti = render(
            <ConfettiAnimationContext.Provider value={{ renderConfetti: true, resetRenderConfetti: jest.fn, confettiPieces: confettiPieces, setConfettiPieces: jest.fn }}>
                <ConfettiEffect />
            </ConfettiAnimationContext.Provider>
        );

        expect(confetti.getByTestId(confettiPieces)).toBeInTheDocument()
    });
});
