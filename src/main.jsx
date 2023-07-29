import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from './context/AuthProvider.jsx';
import App from './App.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path='/*' element={<App/>}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
