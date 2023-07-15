import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"
import NewCustomer from "./NewCustomer"
import ExistingCustomer from "./ExistingCustomer"
import Certificate from "./Certificate"
import Header from "./Header"


const PageRoutes = () => {
    return (
        <Routes>
          <Route exact path="/" element={<><Home /></>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/certificate" element={<><Header title="Tax Preparation"/><Certificate /></>} />
          <Route exact path="/newCustomer" element={<><Header title="New Customer"/><NewCustomer /></>} />
          <Route exact path="/existingCustomer" element={<><Header title="Existing Customer"/><ExistingCustomer /></>} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    )
  }
  export default PageRoutes