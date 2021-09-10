import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HelloWorld from '@components/HelloWorld';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('HelloWorld', () => {
  it('renders with message', async () => {
    expect.hasAssertions();

    /* eslint-disable-next-line jest/prefer-spy-on */
    global.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          success: true,
          message: 'Hi mom 👋',
        }),
      })
    ));

    renderWithRouter(<HelloWorld/>, {
      route: '/',
    });

    await waitFor(() => {
      const textElement = screen.getByTestId('main-text');

      expect(textElement.innerHTML).toContain('Hi mom 👋');
    });

    global.fetch.mockClear();
    delete global.fetch;
  });
});
