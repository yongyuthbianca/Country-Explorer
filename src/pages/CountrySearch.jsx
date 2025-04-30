import countryList from "../data/countries";
import '../styles/CountrySearch.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CountrySearch(){

    const [searchTerm, setSearchTerm] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const input = e.target.value;
        setSearchTerm(input);
        const matches = countryList.filter((country) =>
        country.toLowerCase().startsWith(input.toLowerCase()))
        setSuggestion(matches);
    }

    const handleSelect = (countryName) =>{
        setSearchTerm(countryName);
        setSuggestion([]);
    }


    const handleSearch = () => {
        navigate(`/country/${searchTerm}`);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            handleSearch();
        }
    }

    return(
        <div className="container">
            <h1>Search for a Country</h1>
            <input 
            type="text"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Start typing a country name"
            />
            <button onClick={handleSearch}>Search</button>
            {suggestion.length > 0 && (
                <ul className="suggestions">
                    {suggestion.map((country) =>(
                        <li key={country}>
                            <button onClick={() => handleSelect(country)}>{country}</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CountrySearch;