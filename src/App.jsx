import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Services from './pages/services.jsx'
import ServicesDescription from './pages/ServicesDescription.jsx'
import "./server.js"
// import '../App.css'

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/Login" element={<Login/>} />
<Route path="/Services" element={<Services/>} />
<Route path="/Services/:id" element={<ServicesDescription/>} />
</Routes>
</BrowserRouter>
  )
}

export default App
