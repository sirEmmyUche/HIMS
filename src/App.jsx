import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
// import '../App.css'

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/Login" element={<Login/>} />
</Routes>
</BrowserRouter>
  )
}

export default App
