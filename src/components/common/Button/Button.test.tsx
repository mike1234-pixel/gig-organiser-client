import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
    it('should render the correct text', () => {
        const text = 'Click me';
        const { getByText } = render(<Button>{text}</Button>);
        const button = getByText(text);
        expect(button).toBeInTheDocument();
    });

    it('should have the correct class for the variant prop', () => {
        const variant = 'danger';
        const { container } = render(<Button variant={variant}>Click me</Button>);
        const button = container.querySelector('button');
        expect(button).toHaveClass(`button ${variant}`);
    });

    it('should call the onClick prop when clicked', () => {
        const onClick = jest.fn();
        const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
        const button = getByText('Click me');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });

    it('should have the correct type prop', () => {
        const type = 'submit';
        const { container } = render(<Button type={type}>Click me</Button>);
        const button = container.querySelector('button');
        expect(button).toHaveAttribute('type', type);
    });

    it('should be disabled if the disabled prop is true', () => {
        const { container } = render(<Button disabled={true}>Click me</Button>);
        const button = container.querySelector('button');
        expect(button).toBeDisabled();
    });
});
