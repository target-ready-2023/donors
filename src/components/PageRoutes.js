import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"
import NewCustomer from "./NewCustomer"
import ExistingCustomer from "./ExistingCustomer"
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
          <Route exact path="/newCustomer" element={<><Header title="New Customer"/><NewCustomer /><Footer/></>} />
          <Route exact path="/existingCustomer" element={<><Header title="Existing Customer"/><ExistingCustomer /><Footer/></>} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    )
  }
  export default PageRoutes