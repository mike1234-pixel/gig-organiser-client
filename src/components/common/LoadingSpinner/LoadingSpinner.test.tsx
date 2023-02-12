import { render } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
    it('should render the spinner', () => {
        const { getByTestId } = render(<LoadingSpinner />);
        const spinner = getByTestId('loading-spinner');
        expect(spinner).toBeInTheDocument();
    });
});
