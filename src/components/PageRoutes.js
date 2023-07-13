import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"
import NewCustomer from "./NewCustomer"
import ExistingCustomer from "./ExistingCustomer"
import Certificate from "./Certificate"

const PageRoutes = () => {
    return (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/certificate" element={<Certificate />} />
          <Route exact path="/newCustomer" element={<NewCustomer />} />
          <Route exact path="/existingCustomer" element={<ExistingCustomer />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    )
  }
  export default PageRoutes