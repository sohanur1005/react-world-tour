import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'






const Countries = () => {
 
  const [countries,setCountries]=useState([]);
  const [visitedCountries,setVisitedCountries]=useState([]);
  const handleVisitedCountry=country=>{
    console.log("add to your visited country")
    const newVisitedCountries=[...visitedCountries,country];
    setVisitedCountries(newVisitedCountries)
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

      <div>
        <h5>Country Visited: {visitedCountries.length}</h5>
        <ul>
          {
            visitedCountries.map(country=><li>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="country-container">
        {
        countries.map(country=> <Country key={country.cca3} 
          handleVisitedCountry={handleVisitedCountry}
          country={country}></Country>)
      }
      </div>
      
     
    </div>
  );
};

export default Countries;