import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'






const Countries = () => {
 
  const [countries,setCountries]=useState([]);
  const [visitedCountries,setVisitedCountrie]=useState([]);
  const handleVisitedCountry=country=>{
    console.log("add to your visited country")
    console.log(country)
  }

  useEffect(()=>{

      fetch("https://restcountries.com/v3.1/all?fields=name,flags,languages,capital,population,region,code")
      .then(res=> res.json())
      .then(data=>{
        
        setCountries(data)
      } );

  },[])

  return (
    <div >
      <h3>Countries: {countries.length}</h3>
      <div className="country-conatiner">
        {
        countries.map(country=> <Country key={country.cca3} 
          handleVisitedCountry={handleVisitedCountry}
          country={country}></Country>)
      }
      </div>
      <div>
        <h3>Country Visited</h3>
      </div>
     
    </div>
  );
};

export default Countries;