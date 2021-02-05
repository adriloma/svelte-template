import App from './App.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';



it('renders', async () => {
    const { container } = render(App);
    expect(container).toMatchSnapshot();
});

it('works', async () => {
    const { getByText, getByTestId } = render(App);
    const increment = getByText('+');
    const decrement = getByText('-');
    const reset = getByText('Reset');
    const counter = getByTestId('counter');

    await fireEvent.click(increment);
    // with jest
    expect(counter.textContent).toBe('1');
    // with jest-dom
    expect(counter).toHaveTextContent('1');
});