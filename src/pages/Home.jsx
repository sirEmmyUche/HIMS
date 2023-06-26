import { useState } from 'react'
import {Link} from "react-router-dom"
import Nav from '../pages/nav.jsx'
import HOVS from '../pages/hovs.jsx'
import Services from '../pages/services.jsx'


function Home() {
  return (
    <header>
      <Nav/>
      <HOVS/>
      <Services/>
    </header>
   
  )
}

export default Home