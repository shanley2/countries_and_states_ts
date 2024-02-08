import React, {useState, useEffect} from 'react';
import './components.css';
const Countries = (props: any) => {

    const [data, setData] = useState<any[]>();

    const sortByName = (a: string, b: string) => {
        // a = a.toLowerCase();
        // b = b.toLowerCase();

        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } 
        return 0;
    };

    useEffect(() => {
        fetch('https://xc-countries-api.fly.dev/api/countries/')
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
    }, []);

    if (data) {
        data.sort((a, b) => {
            return sortByName(a.name, b.name);
        })
    }
    
    const handleSelection = (event: any) => {
        props.setCountry(event.target.value);
    };
    
    return (
        <div className="dropdownWrapper">
            <label>Country
                <select className="dropdown" id="countrySelect" onChange={handleSelection}>
                    <option value="default">Choose Country</option>
                    {data ? data.map(d  => (
                        <option value={d.code} key={d.code}>{d.name}</option>
                    )): <option>No data found</option>}
                </select>
            </label>
        </div>

    );
};

export default Countries;