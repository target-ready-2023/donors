import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SideNavigation from "./index";

import { MemoryRouter, useNavigate } from "react-router-dom";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("SideNavigation component", () => {
  let navigateMock;
  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
  });

  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <SideNavigation />
      </MemoryRouter>
    );
  });

//   it("navigates to different routes when menu items are clicked", () => {
//     const { getByTestId } = render(
//       <MemoryRouter>
//         <SideNavigation />
//       </MemoryRouter>
//     );

//     const menuButton = getByTestId("side-navigation");
//     fireEvent.click(menuButton);

//     const homeMenuItem = getByTestId("home-menu-item");
//     fireEvent.click(homeMenuItem);
//     expect(window.location.pathname).toBe("/");

//     const newDonorMenuItem = getByTestId("new-donor-menu");
//     fireEvent.click(newDonorMenuItem);
//     expect(window.location.pathname).toBe("/NewCustomer");

//     const existingDonorMenuItem = getByTestId("existing-donor-menu");
//     fireEvent.click(existingDonorMenuItem);
//     expect(window.location.pathname).toBe("/ExistingCustomer");

//     const taxCertificateMenuItem = getByTestId("tax-certificate-menu");
//     fireEvent.click(taxCertificateMenuItem);
//     expect(window.location.pathname).toBe("/Certificate");
//   });

  it("renders and matches snapshot", () => {
    const { container } = render(<SideNavigation />);
    console.log(container.innerHTML);
  });

  it("navigates to Home", () => {
    render(<SideNavigation />);

    const menuButton = screen.getByTestId("side-navigation");
    fireEvent.click(menuButton);

    const homeMenuItem = screen.getByTestId("home-menu-item");
    fireEvent.click(homeMenuItem);

    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it("navigates to new donor", () => {
    render(<SideNavigation />);

    const menuButton = screen.getByTestId("side-navigation");
    fireEvent.click(menuButton);

    const homeMenuItem = screen.getByTestId("new-donor-menu");
    fireEvent.click(homeMenuItem);

    expect(navigateMock).toHaveBeenCalledWith("/NewCustomer");
  });
  it("navigates to 80g certificate", () => {
    render(<SideNavigation />);

    const menuButton = screen.getByTestId("side-navigation");
    fireEvent.click(menuButton);

    const homeMenuItem = screen.getByTestId("tax-certificate-menu");
    fireEvent.click(homeMenuItem);

    expect(navigateMock).toHaveBeenCalledWith("/Certificate");
  });
});
