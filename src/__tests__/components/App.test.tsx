import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/utils';
import App from '../../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // The app should render something, even if it's just a div
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays the app title', () => {
    render(<App />);
    expect(screen.getByText(/AutoCRM/i)).toBeInTheDocument();
  });
}); 