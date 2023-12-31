import { Route, Routes } from "react-router-dom"
import NotFound from "./NotFound"
import NewDonor from "./NewCostumer/NewDonor"
import ExistingDonor from "./ExistingCostumer/ExistingDonor"
import Certificate from "./Certificate"
import Header from "./Header"
import Footer from "./Footer"
import LandingPage from "./LandingPage"
import AllDonor from "./Admin/AllDonor"
import AllTransaction from "./Admin/AllTransaction"
import SingleDonor from "./Admin/SingleDonor"
import AdminPage from "./Admin/AdminPage"
const PageRoutes = () => {
    return (
        <Routes>
          <Route exact path="/" element={<><Header/><LandingPage /><Footer/></>}/>
          <Route exact path="/admin" element={<><Header/><AdminPage /><Footer/></>}/>
          <Route exact path="/admin/allDonor" element={<><Header/><AllDonor /><Footer/></>}/>
          <Route exact path="/admin/allTransaction" element={<><Header/><AllTransaction /><Footer/></>}/>
          <Route exact path="/admin/transactionOfParticularEmail" element={<><Header/><SingleDonor /><Footer/></>}/>
          <Route exact path="/certificate" element={<><Header title="Tax Preparation"/><Certificate /><Footer/></>} />
          <Route exact path="/newCustomer" element={<><Header title="New Donor"/><NewDonor /><Footer/></>} />

          <Route exact path="/newDonor" element={<><Header title="New Donor"/><NewDonor /><Footer/></>} />
          <Route exact path="/existingDonor" element={<><Header title="Existing Donor"/><ExistingDonor /><Footer/></>} />

          <Route path='*' element={<NotFound />}/>
        </Routes>
    )
  }
  export default PageRoutes
