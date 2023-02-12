import { render } from '@testing-library/react';
import { LayoutPage } from './LayoutPage';

describe('LayoutPage', () => {
    it('should render the children inside a container', () => {
        const { getByTestId } = render(
            <LayoutPage>
                <div data-testid="child">Child</div>
            </LayoutPage>
        );

        const child = getByTestId('child');
        expect(child).toBeInTheDocument();
    });
});
