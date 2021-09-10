import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('navBar', () => {
  it('renders with message', async () => {
    expect.hasAssertions();

    renderWithRouter(<NavBar/>, {
      route: '/',
    });

    const textElement = screen.getByTestId('nav-bar-title');
    expect(textElement.innerHTML).toContain('Sample Menu');
  });
});
