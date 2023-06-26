import {Link} from "react-router-dom"
// import { useState } from "react"
import '../styles/hovs.css'

function HOVS(){
    return(
        <main>
           <div className='hovs-desc'>
            <h1>
            Home <br/>
            Ownership <br/>
            Verification <br/>
            System <br/> (HOVS)
            </h1>
            <p>
            Verify the true owners of any property with HIMS –
             the trusted platform for accurate and reliable property information.
            </p>
            <Link to={"/services"}><button>View All Services</button></Link>
            </div> 
            <div className='hovs'>
                <img src='/images/house-view.webp'
                 alt='house'/>
            </div>
        </main>
    )
}


export default HOVS