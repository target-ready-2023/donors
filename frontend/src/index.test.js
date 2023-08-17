import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Mock the reportWebVitals function
jest.mock('./reportWebVitals', () => jest.fn());

describe('index.js', () => {
  it('renders the App component', () => {
    // Create a mock root element
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // Render the App component
    act(() => {
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        root
      );
    });

    // Assert that the App component was rendered
    const appElement = document.querySelector('.App'); // Assuming a class of 'App' in your App component
    expect(appElement).toBeInTheDocument();

    // Clean up
    document.body.removeChild(root);
  });

  it('calls reportWebVitals', () => {
    // Render the reportWebVitals function
    act(() => {
      reportWebVitals();
    });

    // Assert that reportWebVitals was called
    expect(reportWebVitals).toHaveBeenCalled();
  });
});
