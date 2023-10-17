import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar Component', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const translationLink = screen.getByText('Translation App');
    const detectLanguageLink = screen.getByText('Detect Language');
    const supportedLanguagesLink = screen.getByText('Supported Languages');

    expect(translationLink).toBeInTheDocument();
    expect(detectLanguageLink).toBeInTheDocument();
    expect(supportedLanguagesLink).toBeInTheDocument();
  });


});
