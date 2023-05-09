import { cleanup, render, screen } from '@testing-library/react';

import App from '../Root';

// Example tests
describe('App', () => {
  afterEach(cleanup);

  it('snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('renders a button with correct text', () => {
    render(<App />);

    const button = screen.queryByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('count is 0');
  });
});
