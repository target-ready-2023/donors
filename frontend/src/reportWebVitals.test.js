const { waitFor } = require('@testing-library/react');

const reportWebVitals = require('./reportWebVitals').default;

// Mock the 'web-vitals' module
jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}));

test('calls web-vitals functions when onPerfEntry is provided', () => {
  const onPerfEntry = jest.fn();

  reportWebVitals(onPerfEntry);

  // Check if each web-vitals function was called with onPerfEntry
 waitFor(()=> expect(require('web-vitals').getCLS).toHaveBeenCalledWith(onPerfEntry));
 waitFor(()=> expect(require('web-vitals').getFID).toHaveBeenCalledWith(onPerfEntry));
 waitFor(()=> expect(require('web-vitals').getFCP).toHaveBeenCalledWith(onPerfEntry));
 waitFor(()=> expect(require('web-vitals').getLCP).toHaveBeenCalledWith(onPerfEntry));
 waitFor(()=> expect(require('web-vitals').getTTFB).toHaveBeenCalledWith(onPerfEntry));
});

test('does not call web-vitals functions when onPerfEntry is not provided', () => {
  reportWebVitals(null);

  // Check if each web-vitals function was not called
 waitFor(()=> expect(require('web-vitals').getCLS).not.toHaveBeenCalled());
waitFor(()=>  expect(require('web-vitals').getFID).not.toHaveBeenCalled());
 waitFor(()=> expect(require('web-vitals').getFCP).not.toHaveBeenCalled());
 waitFor(()=> expect(require('web-vitals').getLCP).not.toHaveBeenCalled());
 waitFor(()=> expect(require('web-vitals').getTTFB).not.toHaveBeenCalled());
});
