import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import '../styles/servicesdetails.css'


function ServicesDescription(){
    const params = useParams();
    const [serviceDetails, setServiceDetails] = useState(null)
    useEffect(()=>{
        async function detailsData(){
            const data = await fetch(`/api/services/${params.id}`)
            const res = await data.json()
            setServiceDetails(res.service) 
        }
        detailsData()
    },[params.id])

    return(
        <section className="product-detail-wrapper">
           {serviceDetails?(<div>
            <h2 className="service-detail-name">{serviceDetails.name}</h2>
            <div className="service-detail-img">
                <img src={serviceDetails.imgUrl} alt="houseImage"/>
            </div>
            <div className="desc-get">
                <h3>Description</h3>
                <button>Get started</button>
            </div>
            <p>{serviceDetails.full_description}</p>
           </div>
           ):<h4>Loading----</h4>}
        </section>
    )
}

export default ServicesDescription


