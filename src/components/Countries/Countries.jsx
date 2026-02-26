import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'






const Countries = () => {
 
  const [countries,setCountries]=useState([]);
  const [visitedCountries,setVisitedCountries]=useState([]);
  const [visitedFlags,setVisitedFlags]=useState([])
  const handleVisitedCountry=country=>{
    console.log("add to your visited country")
    const newVisitedCountries=[...visitedCountries,country];
    setVisitedCountries(newVisitedCountries)
  }
  const handleVisitedFlags=flag=>{
          const newVisitedFlags=[...visitedFlags,flag]
          setVisitedFlags(newVisitedFlags)
  }

  useEffect(()=>{

      fetch("https://restcountries.com/v3.1/all?fields=name,flags,languages,capital,population,region,cca3")
      .then(res=> res.json())
      .then(data=>{
        
        setCountries(data)
      } );

  },[])

  return (
    <div >
      <h3>Countries: {countries.length}</h3>
      {/* visited countries */}
      <div>
        <h5>Country Visited: {visitedCountries.length}</h5>
        <ul>
          {
            visitedCountries.map(country=><li>{country.name.common}</li>)
          }
        </ul>
      </div>
      {/* visited flags */}
      <div className="flag-container">
        {
          visitedFlags.map(flag=> <img src={flag}></img>)
        }
      </div>

      {/* show countries */}
      <div 
      className="country-container">
        {
        countries.map(country=> <Country key={country.cca3} 
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlags={handleVisitedFlags}
          country={country}></Country>)
      }
      </div>
      
     
    </div>
  );
};

export default Countries;