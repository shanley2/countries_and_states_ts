import React, {useState} from 'react';
import './components.css';

const AddCountry = () => {
    const [newCountry, setCountry] = useState("");
    const [newCode, setCode] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        const varia : string =  JSON.stringify({
            name: newCountry,
            code: newCode,
        });
        console.log(varia);

        if (newCountry === "" ||  newCode === "") {
            alert("Both fields must be populated to add a country");
        } else {
            fetch("https://xc-countries-api.fly.dev/api/countries/", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: newCode,
                    name: newCountry,
                }),

            }).catch(error => {
                console.log(error);
            });
        }
    };
    

    return (
        <div className="Country">
            <div className="Country-head">
                <h1>Add New Country</h1>
            </div>
            <div className="Country-body">
                <div className="Country-form">
                    <div className="input-boxes">
                        <label className="text-label">Country Name
                            <input type="text" id="countryName" className="input-box" onChange={event => setCountry(event.target.value)}/>
                        </label>
                        
                        <label className="text-label">Country Code 
                            <input type="text" id="countryCode" className="input-box" onChange={event => setCode(event.target.value)}/>
                        </label>
                    </div>
                    <div className="input-submit">
                        <button className="Country-button" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddCountry;