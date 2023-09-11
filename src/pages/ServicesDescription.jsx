import {Link, useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import '../styles/servicesdetails.css'


function ServicesDescription(){
    const params = useParams();
    const [serviceDetails, setServiceDetails] = useState(null)
    useEffect(()=>{
        async function detailsData(){
            const data = await fetch(`http://localhost:3000/api/service/${params.id}`)
            const res = await data.json()
            console.log(res)
            setServiceDetails(res) 
        }
        detailsData()
    },[params.id])

    return(
        <section className="product-detail-wrapper">
           {serviceDetails?(<div id="content-wrapper">
            <h2 className="service-detail-name">{serviceDetails.name}</h2>
            <div className="service-detail-img">
                <img src={`../${serviceDetails.imgUrl}`} alt="houseImage"/>
            </div>
            <div className="desc-get">
                <Link to={"/Login"}><button className="get-started">Get started</button></Link>
                <h3>Description</h3>
            </div>
            <p className="service-description">{serviceDetails.full_description}</p>
           </div>
           ):<h4>Loading----</h4>}
        </section>
    )
}

export default ServicesDescription


