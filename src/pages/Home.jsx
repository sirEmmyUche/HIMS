import { useState } from 'react'
import {Link} from "react-router-dom"


function Home() {
  return (
    <div>
      <Link to={"/Login"}>This is the home page</Link>
        
    </div>
   
  )
}

export default Home