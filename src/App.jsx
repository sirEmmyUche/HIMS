import {Routes, Route,} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/signup.jsx"
import Services from './pages/services.jsx'
import RequireAuth from './pages/private.jsx'
import ErrorPage from './pages/404ErrorPage.jsx'
import ServicesDescription from './pages/ServicesDescription.jsx'
import Profile from './pages/dashboard/profile.jsx'
import VerifyHouse from './pages/dashboard/verifyhouse.jsx'
import RegisterHouse from './pages/dashboard/registerhouse.jsx'
import Layout from "./layouts/layout.jsx"
import Dashboard_Profile_Layout from "./layouts/dashboard-nav.jsx"

function App() {
  return (
<Routes>
        {/* Allowed for pubilc view */}

      <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Services/:id" element={<ServicesDescription/>} />
      </Route>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />

      {/* Restricted from the public views*/}
      <Route element={<RequireAuth/>}>
      <Route element={<Dashboard_Profile_Layout/>} >
        <Route path='/dashboard' element={<Profile/>}/>
        <Route path='/dashboard/verifyhouse' element={<VerifyHouse/>}/>
        <Route path='/dashboard/registerhouse' element={<RegisterHouse />}/>
      </Route>
      </Route> 
      
    {/* 404 Error page */}
    <Route path='*' element={<ErrorPage/>}/>
  </Routes>
  )
}

export default App






