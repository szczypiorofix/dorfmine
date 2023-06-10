import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';



test('properly renders main App component', () => {
    render(<Provider store={store}>
        <App />
      </Provider>);

    const appElement = screen.getByTestId('app-test-id');
    
    expect(appElement).toBeInTheDocument();
    expect(appElement).toBeValid();
    expect(appElement).toBeVisible();
});
