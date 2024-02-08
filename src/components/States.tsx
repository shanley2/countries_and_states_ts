import React, {useState, useEffect} from 'react';
import './components.css';
import { StringLiteralType } from 'typescript';

const States = (props: any) => {

    const [data, setData] = useState<any[]>();
    const apiString: string = "https://xc-countries-api.fly.dev/api/countries/" + props.country + "/states/";

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
        
        fetch(apiString)
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
    }, [apiString]);

    if (data) {
        data.sort((a, b) => {
            return sortByName(a.name, b.name);
        })
    }
    
    return (
        <div className="dropdownWrapper">
            <label>State
                <select className="dropdown" id="stateSelect" >
                    <option value="default">Choose state</option>
                    {data ? data.map(d => (
                        <option value={d.code} key={d.code}>{d.name}</option>
                    )): <option>No data found</option>}
                </select>
            </label>
        </div>

    );
};

export default States;