import React, { useState } from 'react';
import './components.css';
import Countries from './Countries';
import States from './States';



const CandS = () => {
    const [country, setCountry] = useState();

    return (
        <div className="dropdowns">
            <Countries country={country} setCountry={setCountry} />
            <States country={country} />
        </div>
    );
}

export default CandS;