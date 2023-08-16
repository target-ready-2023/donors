import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { waitFor } from '@testing-library/react';



jest.mock('./reportWebVitals', () => jest.fn());

function simulateAct(callback) {
    callback();
  }

test('renders the App component', () => {
  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(App, root);
 waitFor(()=> expect(root.querySelector('.App')).toBeInTheDocument());
  ReactDOM.unmountComponentAtNode(root);

  document.body.removeChild(root);
});

test('calls reportWebVitals', () => {
  const mockReportWebVitals = require('./reportWebVitals').default;

  const root = document.createElement('div');
  document.body.appendChild(root);

  simulateAct(() => {
    const rootElement = ReactDOM.createRoot(root);
    rootElement.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });

 waitFor(()=> expect(mockReportWebVitals).toHaveBeenCalled());

  ReactDOM.unmountComponentAtNode(root);

  document.body.removeChild(root);
});

  
