import { render } from '@testing-library/react';
import { Container, ContainerProps } from './Container';

describe('Container component', () => {
    const props: ContainerProps = {
        children: [
            <p key="1">This is a child node</p>,
            <p key="2">This is another child node</p>
        ]
    };

    it('renders the children inside a div with the root class', () => {
        const { getByTestId } = render(<Container {...props} />);
        const container = getByTestId('container');
        expect(container).toBeInTheDocument();
        expect(container.children).toHaveLength(2);
        expect(container.firstChild).toHaveTextContent('This is a child node');
        expect(container.lastChild).toHaveTextContent('This is another child node');
    });
});
