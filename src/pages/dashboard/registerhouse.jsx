import { registerHouse } from "../../api"
// import { googleSignup } from "../../googlesignup"
import {useState} from "react"
import "../../styles/registerhouse.css"


function RegisterHouse(){
const [result, setResult] = useState(null)
const [houseDetails,setHouseDetails] = useState({nameOfOwner:"",houseNumber:"",street:"",LGA:"",state:"",
proofOfOwnership:null, houseImage:null})

const handleHouseDetails = (event)=>{
        setHouseDetails((prev)=>{ return {...prev,[event.target.name]:event.target.value}
    })
}

const handleFile = (event)=>{
    setHouseDetails((prev)=>{return {...prev,[event.target.name]:event.target.files[0]}})
}

const sendFileToServer = async()=>{
    const data = new FormData();
    data.append("nameOfOwner",houseDetails.nameOfOwner)
    data.append("houseNumber",houseDetails.houseNumber)
    data.append("street",houseDetails.street)
    data.append("LGA",houseDetails.LGA)
    data.append("state",houseDetails.state)
    data.append("proofOfOwnership",houseDetails.proofOfOwnership)
    data.append("houseImage",houseDetails.houseImage)
    try{
        const res = await registerHouse(data)
        let message = res.Message 
        setResult({message})
    }catch(err){
        console.log(err)
    }
}

const handleSubmit = (event)=>{
    event.preventDefault();
    sendFileToServer()
}

    return(
    <div id="register-house">
    <h1>Register A House</h1>
        {!result? 
    <form id="register-form-data" onSubmit={handleSubmit}>

<label className="label-css">Name of Owner:<br/>
    <input type="text"
    required
    name="nameOfOwner"
    value={houseDetails.nameOfOwner}
    onChange={handleHouseDetails}
    placeholder="name of owner"/>
</label>

<label className="label-css">House Number:<br/>
    <input type="number"
    required
    name="houseNumber"
    value={houseDetails.houseNumber}
    onChange={handleHouseDetails}
    placeholder="Enter House number"/>
</label>

<label className="label-css">Street:<br/>
    <input type="text"
     required
     name="street"
    value={houseDetails.street}
    onChange={handleHouseDetails}
    placeholder="Enter street name"/>
</label>

<label className="label-css">LGA:<br/>
    <input type="text"
    required
    name="LGA"
    value={houseDetails.LGA}
    onChange={handleHouseDetails}
    placeholder="Example: Akure North"/>
</label>
<label className="label-css">State:<br/>
    <input type="text"
     required
     name="state"
    value={houseDetails.state}
    onChange={handleHouseDetails}
    placeholder="Example: Ondo"/>
</label>

<label className="label-css">House Image:<br/>
    <input type="file"accept=".jpg, .png, .jpeg"
    required
    name="houseImage"
    onChange={handleFile}
    placeholder="accept only: jpg, png and jpeg file"/>
</label>

<label className="label-css">Proof of ownership:<br/>
    <input type="file"accept=".doc, .pdf"
    required
    name="proofOfOwnership"
    onChange={handleFile}
    placeholder="accept only: doc and pdf file"/>
</label>
<input type="submit" placeholder="submit" onSubmit={handleSubmit}/>
</form>
:
<div id="show-result-wrapper">
    <h2 className="show-result-text">{result.message || result.error}</h2>
</div>
    }
        </div>
    )
}

export default RegisterHouse