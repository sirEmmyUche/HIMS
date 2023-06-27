import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Services from './pages/services.jsx'
import ServicesDescription from './pages/ServicesDescription.jsx'
import Profile from './pages/dashboard/profile.jsx'
import VerifyHouse from './pages/dashboard/verifyhouse.jsx'
import RegisterHouse from './pages/dashboard/registerhouse.jsx'
import Header from "./layouts/header.jsx"
import Dashboard_Profile_Layout from "./layouts/dashboard-nav.jsx"
import "./server.js"
// import '../App.css'

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route element={<Header/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Services/:id" element={<ServicesDescription/>} />
  </Route>
  <Route element={<Dashboard_Profile_Layout/>} >
    <Route path='/dashboard' element={<Profile/>}/>
    <Route path='/dashboard/verifyhouse' element={<VerifyHouse/>}/>
    <Route path='/dashboard/registerhouse' element={<RegisterHouse />}/>
  </Route>
</Routes>
</BrowserRouter>
  )
}

export default App



// Pages to build for this project

// >login page
// >signup page
// >profile page 
// this profile page will have the following; 
// dashboard (name of user, verify house, register house, settings)
//footer page




