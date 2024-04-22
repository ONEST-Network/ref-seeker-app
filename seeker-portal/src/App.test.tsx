import '@testing-library/jest-dom'
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
      <App />
    );
  });

  it('renders routes correctly', () => {
    const { getByText } = render(
      <App />
    );

    expect(getByText('Home')).toBeInTheDocument(); // Example text
  });
});
