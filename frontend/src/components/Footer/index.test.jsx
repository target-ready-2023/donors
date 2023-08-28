
import React from "react";

import Footer from "./index"; // Assuming the component is in a file named Footer.js
import { render,screen  } from "@testing-library/react";

describe("Footer component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });
  it("renders About Us section", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("About Us")).toBeInTheDocument();
    expect(
      getByText(
        "Dream School Foundation was established in Bangalore, India in 2005 by a group of passionate volunteers."
      )
    ).toBeInTheDocument();
  });
  it("renders Contact Us section", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Contact Us")).toBeInTheDocument();
    expect(getByText("123, Hennur Road, Banglore")).toBeInTheDocument();
    expect(getByText("Email: info@dsfindia.org")).toBeInTheDocument();
    expect(getByText("Phone: +91 98440 60478")).toBeInTheDocument();
  });

  it("renders Follow Us section", () => {
    const { getByText, getByTestId } = render(<Footer />);
    const followUsTitle = getByText(/Follow Us/i);
    const facebookIcon = getByTestId("facebook-icon");
    const instagramIcon = getByTestId("instagram-icon");
    const twitterIcon = getByTestId("twitter-icon");
    expect(followUsTitle).toBeInTheDocument();
    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
  });
  it("renders Copyright notice", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();

    // Validate the presence of important elements within the Copyright section
    const copyrightSection = screen.getByRole("contentinfo");
    expect(copyrightSection).toBeInTheDocument();

    const copyrightLink = screen.getByRole("link", { name: /Dream School Foundation/i });
    expect(copyrightLink).toBeInTheDocument();
    expect(copyrightLink).toHaveAttribute("href", "https://www.dsfindia.org/");

    // Use a regular expression to match the expected copyright text
    const copyrightRegex = new RegExp(
      `Copyright © ${currentYear} Dream School Foundation\\. All rights reserved\\.`,
      "i"
    );
    
    // Check if the copyright text exists within the copyright section's content
    expect(copyrightSection).toHaveTextContent(copyrightRegex);
  });
});




  

