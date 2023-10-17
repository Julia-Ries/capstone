// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; 
// import DetectLanguage from './DetectLanguage';


// describe('DetectLanguage Component', () => {
//     beforeEach(() => {
//       // Reset before each test
//       LanguageApi.getLanguages.mockReset();
//       LanguageApi.detectLanguage.mockReset();
//     });
  
//     it('renders without errors', () => {
//       render(<DetectLanguage />);
//       expect(screen.getByText('Language Detection')).toBeInTheDocument();
//     });
  
//     it('fetches available languages on mount', async () => {
//       LanguageApi.getLanguages.mockResolvedValue(['en', 'es', 'fr']);
//       render(<DetectLanguage />);
      
//       // Wait for the component to fetch languages
//       await waitFor(() => {
//         expect(LanguageApi.getLanguages).toHaveBeenCalledTimes(1);
//       });
  
//       // Check if the correct languages are displayed
//       expect(screen.getByText('en')).toBeInTheDocument();
//       expect(screen.getByText('es')).toBeInTheDocument();
//       expect(screen.getByText('fr')).toBeInTheDocument();
//     });
  
//     it('detects and displays the detected language', async () => {
//       LanguageApi.detectLanguage.mockResolvedValue([[{ language: 'es' }]]);
//       render(<DetectLanguage />);
      
//       // Enter text and trigger detection
//       const textArea = screen.getByPlaceholderText('Enter text to detect its language');
//       fireEvent.change(textArea, { target: { value: 'Hola' } });
//       fireEvent.click(screen.getByText('Submit'));
  
//       // Wait for the detection to be done
//       await waitFor(() => {
//         expect(LanguageApi.detectLanguage).toHaveBeenCalledTimes(1);
//       });
  
//       // Check if the detected language is displayed
//       expect(screen.getByText('Detected Language : Spanish')).toBeInTheDocument();
//     });
  

//   });
  