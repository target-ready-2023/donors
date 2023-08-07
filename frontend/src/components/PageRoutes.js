import { Route, Routes } from "react-router-dom"

import About from "./About"
import NotFound from "./NotFound"
import NewDonor from "./NewDonor"
import ExistingDonor from "./ExistingDonor"
import Certificate from "./Certificate"
import Header from "./Header"
import Footer from "./Footer"
import LandingPage from "./LandingPage"

const PageRoutes = () => {
    return (
        <Routes>
          <Route exact path="/" element={<><Header/><LandingPage /><Footer/></>}/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/certificate" element={<><Header title="Tax Preparation"/><Certificate /><Footer/></>} />
          <Route exact path="/newDonor" element={<><Header title="New Donor"/><NewDonor /><Footer/></>} />
          <Route exact path="/existingDonor" element={<><Header title="Existing Donor"/><ExistingDonor /><Footer/></>} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    )
  }
  export default PageRoutes