import "../../styles/registerhouse.css"


function RegisterHouse(){

const handleSubmit = (event)=>{
    event.preventDefault();
}

    return(
        <div id="register-house">
            <h1>Register A House</h1>
            <form id="register-form-data"  onSubmit={handleSubmit}>

            <label className="label-css">Name of Owner:<br/>
                <input type="text"
                required
                placeholder="name of owner"/>
            </label>

            <label className="label-css">House Number:<br/>
                <input type="number"
                required
                placeholder="Enter House number"/>
            </label>

            <label className="label-css">Street:<br/>
                <input type="text"
                 required
                placeholder="Enter street name"/>
            </label>

            <label className="label-css">LGA:<br/>
                <input type="text"
                required
                placeholder="Example: Akure North"/>
            </label>
            <label className="label-css">State:<br/>
                <input type="text"
                 required
                placeholder="Example: Ondo"/>
            </label>

            <label className="label-css">House Image:<br/>
                <input type="file"accept=".jpeg, .png, .jpeg"
                required
                placeholder="accept only: jpeg, png and jpeg file"/>
            </label>

            <label className="label-css">Proof of ownership:<br/>
                <input type="file"accept="doc, .pdf"
                required
                placeholder="accept only: doc and pdf file"/>
            </label>
            <input type="submit" placeholder="submit" onSubmit={handleSubmit}/>
        </form>
        </div>
    )
}

export default RegisterHouse