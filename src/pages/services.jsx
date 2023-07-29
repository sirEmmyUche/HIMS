import {Link} from "react-router-dom"
import { useState, useEffect } from "react"
import '../styles/services.css'


function Services(){
const [serviceRendered, setServiceRendered] = useState([]);
useEffect(()=>{
    async function apiData(){
    const data = await fetch("https://housing-84si.onrender.com/api/service")
    const response = await data.json();
    setServiceRendered(response.services)
    }
    apiData();
}, [])

const servicesRenderedElement = serviceRendered.map((service)=>{
       return(
        <div className="service-wrpper" key={service._id}>
            <div className="service-image-container">
            <img src={service.imgUrl} alt="house-image"/>
            </div>
        <h4>{service.name}</h4>
        <p className="brief_desc">{service.brief_desc}</p>
        <Link to={`/Services/${service._id}`}><div className="read-more">Read more</div></Link>
        </div>
       ) 
})

    return(
        <section>
            <h1>Services</h1>
            <div className="section-1">{servicesRenderedElement}</div>
        </section>
    )
}

export default Services