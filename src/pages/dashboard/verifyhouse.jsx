import {useState,useEffect, useRef } from "react"
import { verifyHouse } from "../../api"
import "../../styles/verifyhouse.css"

function VerifyHouse(){
    const [showResult, setShowResult] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [verifyHouseDetails, setVerifyHouseDetails]= useState({houseNumber:"",state:"",LGA:"",street:"",})


    const handleVerifyHouseDetails = (event)=>{
        setVerifyHouseDetails((prev)=>{
            return {...prev,
            [event.target.name]:event.target.value
        }
        })
    }

    const handleSubmitFormDetails = async ()=>{
        try{
            setIsSubmitting(true)
            const data = await verifyHouse(verifyHouseDetails)
            let owner = data.owner;
            let houseImg = data.houseImg;
            let ErrMsg = data.message;
            let status = data.status;
            if(status != 200){
                setShowResult({ErrMsg})
            } 
            if(owner){
                setShowResult({owner, houseImg})
                setIsSubmitting(false)
            }
        }catch(err){
            console.log(err)
        }
    }

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])


    const handleSubmit = (event)=>{
        event.preventDefault();
        handleSubmitFormDetails();
    }
    
    return(
        <section id="verify-house">
            <h1>Verify House</h1>
            {!showResult?
            (<form id="form-data"  onSubmit={handleSubmit}>
                <div className="form-field">
                    <label className="label-css">House Number:<br/>
                    <input type="number"
                    required
                    // ref={userRef}
                    name="houseNumber"
                    value={verifyHouseDetails.houseNumber}
                    onChange={handleVerifyHouseDetails}
                    placeholder="Enter House number"/>
                    </label>
                    <label className="label-css">Street:<br/>
                    <input type="text"
                    required
                    //  ref={userRef}
                    name="street"
                    value={verifyHouseDetails.street}
                    onChange={handleVerifyHouseDetails}
                    placeholder="Enter street name"/>
                    </label>
                </div>

           <div className="form-field" >
             <label className="label-css">LGA:<br/>
                <input type="text"
                required
                // ref={userRef}
                name="LGA"
                value={verifyHouseDetails.LGA}
                onChange={handleVerifyHouseDetails}
                placeholder="Example: Akure North"/>
            </label>
            <label className="label-css">State:<br/>
                <input type="text"
                 required
                 name="state"
                //  ref={userRef}
                 value={verifyHouseDetails.state}
                 onChange={handleVerifyHouseDetails}
                placeholder="Example: Ondo"/>
            </label>
           </div>
           
            <div className="verify-submit-btn">
              <button
              type="submit" 
              disabled={isSubmitting}>
                {isSubmitting?"Verifying...":"Verify"}
              </button></div>
        </form>)
        :
        (<div id="result-wrapper">
            {showResult.owner?<div id="result-wrapper">
            <img src={`https://housing-84si.onrender.com/${showResult.houseImg}`} alt="house-image" 
            className="result-img-box"/>
            <p className="name-of-owner">Property Owner: {showResult.owner}</p>
            <p className="caution"><span>Caution:</span> Image shown may not display the true image of the Property.
                Image displayed are gotten from the image uploaded at the time of registration
                of the property.
            </p>
            </div>
            :
            <div id="result-wrapper">
                <p className="not-found">{showResult.ErrMsg}</p>
            </div>
                }
        </div>)}
        </section>
    )
}

export default VerifyHouse
