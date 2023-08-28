const { waitFor } = require("@testing-library/react");

const reportWebVitals = require("./reportWebVitals").default;
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
// Mock the 'web-vitals' module
jest.mock("web-vitals", () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}));

describe("reportWebVitals function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("calls web-vitals functions when onPerfEntry is provided", () => {
    const onPerfEntry = jest.fn();

    reportWebVitals(onPerfEntry);

    // Check if each web-vitals function was called with onPerfEntry
    waitFor(() =>
      expect(require("web-vitals").getCLS).toHaveBeenCalledWith(onPerfEntry)
    );
    waitFor(() =>
      expect(require("web-vitals").getFID).toHaveBeenCalledWith(onPerfEntry)
    );
    waitFor(() =>
      expect(require("web-vitals").getFCP).toHaveBeenCalledWith(onPerfEntry)
    );
    waitFor(() =>
      expect(require("web-vitals").getLCP).toHaveBeenCalledWith(onPerfEntry)
    );
    waitFor(() =>
      expect(require("web-vitals").getTTFB).toHaveBeenCalledWith(onPerfEntry)
    );
  });

  it("does not call web-vitals functions when onPerfEntry is not provided", () => {
    reportWebVitals(null);

    // Check if each web-vitals function was not called
    waitFor(() => expect(require("web-vitals").getCLS).not.toHaveBeenCalled());
    waitFor(() => expect(require("web-vitals").getFID).not.toHaveBeenCalled());
    waitFor(() => expect(require("web-vitals").getFCP).not.toHaveBeenCalled());
    waitFor(() => expect(require("web-vitals").getLCP).not.toHaveBeenCalled());
    waitFor(() => expect(require("web-vitals").getTTFB).not.toHaveBeenCalled());
  });
  
  it('does nothing when callback is not provided', () => {
    reportWebVitals(null);

    // Check that none of the getXXX functions from the mocked web-vitals module were called
    expect(getCLS).not.toHaveBeenCalled();
    expect(getFID).not.toHaveBeenCalled();
    expect(getFCP).not.toHaveBeenCalled();
    expect(getLCP).not.toHaveBeenCalled();
    expect(getTTFB).not.toHaveBeenCalled();
  });
  it('does nothing when callback is not a function', () => {
    reportWebVitals('invalid');

    // Check that none of the getXXX functions from the mocked web-vitals module were called
    expect(getCLS).not.toHaveBeenCalled();
    expect(getFID).not.toHaveBeenCalled();
    expect(getFCP).not.toHaveBeenCalled();
    expect(getLCP).not.toHaveBeenCalled();
    expect(getTTFB).not.toHaveBeenCalled();
  });
});



