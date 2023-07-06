import {useState, useCallback} from "react"
import "../../styles/verifyhouse.css"

function VerifyHouse(){

    const [verifyHouseDetails, setVerifyHouseDetails]= useState({
        houseNumber:"",
        state:"",
        LGA:"",
        street:"",
    })

    const handleVerifyHouseDetails = (event)=>{
        setVerifyHouseDetails((prev)=>{
            return {...prev,
            [event.target.name]:event.target.value
        }
        })
    }

    const handleSubmitFormDetails = useCallback(()=>{
       const apiCall =  async ()=>{
        const data = await fetch("http://localhost:3000/api/verifyHouse",{
            method:"post",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
               verify: verifyHouseDetails 
            })   
        })
        const response = await data.json()
        console.log(response) 
    }
     apiCall()
    },[verifyHouseDetails])


    const handleSubmit = (event)=>{
        event.preventDefault();
        handleSubmitFormDetails();
    }
    
    return(
        <section id="verify-house">
            <h1>Verify House</h1>
            <form id="form-data"  onSubmit={handleSubmit}>
            <label className="label-css">House Number:<br/>
                <input type="number"
                required
                name="houseNumber"
                value={verifyHouseDetails.houseNumber}
                onChange={handleVerifyHouseDetails}
                placeholder="Enter House number"/>
            </label>
            <label className="label-css">Street:<br/>
                <input type="text"
                 required
                 name="street"
                 value={verifyHouseDetails.street}
                 onChange={handleVerifyHouseDetails}
                placeholder="Enter street name"/>
            </label>
            <label className="label-css">LGA:<br/>
                <input type="text"
                required
                name="LGA"
                value={verifyHouseDetails.LGA}
                onChange={handleVerifyHouseDetails}
                placeholder="Example: Akure North"/>
            </label>
            <label className="label-css">State:<br/>
                <input type="text"
                 required
                 name="state"
                 value={verifyHouseDetails.state}
                 onChange={handleVerifyHouseDetails}
                placeholder="Example: Ondo"/>
            </label>
            <input type="submit" placeholder="submit" onSubmit={handleSubmit}/>
        </form>
        </section>
    )
}

export default VerifyHouse