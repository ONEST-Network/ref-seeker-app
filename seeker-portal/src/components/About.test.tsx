import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import About from './About';

describe('About component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<About />);
    const aboutElement = getByText(/About/i);
    expect(aboutElement).toBeInTheDocument();
  });
});