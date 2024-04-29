import '@testing-library/jest-dom'
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home component', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    
    expect(getByText('Continue as Agent')).toBeInTheDocument();
    expect(getByText('Continue as Individual')).toBeInTheDocument();
  });

  it('should call handleAgent when "Continue as Agent" button is clicked', () => {
    const handleAgentMock = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <Home  />
      </MemoryRouter>
    );

    fireEvent.click(getByText('Continue as Agent'));
  });

  it('should call handleIndividual when "Continue as Individual" button is clicked', () => {
    const handleIndividualMock = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    fireEvent.click(getByText('Continue as Individual'));
  });
});
