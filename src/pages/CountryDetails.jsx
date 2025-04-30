import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [population, setPopulation] = useState(null);
  const [capital, setCapital] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [languages, setLanguages] = useState(null); 
  const [flag, setFlag] = useState(null);
  const [continent, setContinent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch country data");
        }
        return res.json();
      })
      .then((data) => {
        setPopulation(data[0].population);
        setCapital(data[0].capital?.[0] || "N/A");
        setLanguages(Object.values(data[0].languages).join(", ")); 
        setFlag(data[0].flags?.png || "");
        setContinent(data[0].continents.join(",") || "NA");
  
        const currencyData = data[0].currencies;
        if (currencyData) {
          const code = Object.keys(currencyData)[0];
          const name = currencyData[code].name;
          const symbol = currencyData[code].symbol;
          setCurrency(`${name} (${symbol})`);
        } else {
          setCurrency("N/A");
        }
  
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [countryName]);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>{countryName}</h1>
      {flag && <img src={flag} alt={`${countryName} flag`} style={{ width: "200px" }} />}
      <p>Capital: {capital || "NA"}</p>
      <p>Currency: {currency || "NA"}</p>
      <p>Languages: {languages || "NA"}</p> 
      <p>Population: {population.toLocaleString()}</p>
      <p>Continent: {continent || "NA"}</p>
    </div>
  );
};

export default CountryDetails;
