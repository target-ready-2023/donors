import { render, screen } from '@testing-library/react';
import LandingPage from './index';
import { waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
describe('LandingPage', () => {
  test('should render without errors', () => {
    render(
    <MemoryRouter>
      <LandingPage/>
      </MemoryRouter>);
       const pageTitle = screen.queryByText("landing-page");
       waitFor(()=> expect(pageTitle).toBeInTheDocument());
  });

  it('should display the image', () => {
    render(
      <MemoryRouter>
        <LandingPage/>
      </MemoryRouter>
    );
    const imageElement = screen.queryByTestId( 'landing-page-image' );
   waitFor(()=> expect(imageElement).toBeInTheDocument());
   waitFor(()=> expect(imageElement).toHaveAttribute(
      'src',
      'https://en-media.thebetterindia.com/uploads/2021/09/Project-Dream-School.jpg?compress=true&quality=80&w=800&dpr=1.3'
    ));
  });
  it('should render the Homef component', () => {
    render(
      <MemoryRouter>
        <LandingPage/>
      </MemoryRouter>
    );
    const homefComponent = screen.queryByTestId('homef-component');
    waitFor(()=> expect(homefComponent).toBeInTheDocument());
  });
});
