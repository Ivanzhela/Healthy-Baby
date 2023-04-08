import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Home';

test('loads and display Home page', async () => {

    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );

    await userEvent.click(screen.getByText('Recipes'))
    expect(document.location.pathname).toContain('/catalog');
});
