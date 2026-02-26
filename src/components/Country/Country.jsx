import React, { useState } from 'react';


const Country = ({country,handleVisitedCountry}) => {
    console.log(country)
    const {name,flags,population,capital,cca3}=country;
    const [visited,setVisited]=useState(false);
    const handleVisited=()=>{
        setVisited(!visited);
    }
    console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited ?'visited':'non-visited'}`}>
            <h3 style={{color: visited? 'purple':'black'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>capital: {capital}</p>
            <p>code: {cca3}</p>
            <br />
            <button>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
            {visited? ' I have visited':'I want to visit'}
        </div>
    );
};

export default Country;