import { useState } from 'react'
import {Link} from "react-router-dom"


function Home() {
  return (
    <div>
      <Link to={"/Login"}>This is the home page</Link>
      <img src="https://10web-site.ai/36/wp-content/uploads/sites/39/2023/04/logoipsum-218-1_a19KCKOD.webp"/>
        
    </div>
   
  )
}

export default Home