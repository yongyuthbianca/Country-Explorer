import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Continent from "./pages/Continent";
import CountryList from "./pages/CountryList";
import CountryInfo from "./pages/CountrySearch";
import './App.css';
import CountryDetails from "./pages/CountryDetails";

function App(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/continent" element={<Continent/>}/>
                <Route path="/continent/countries" element={<CountryList/>}/>
                <Route path="/country" element={<CountryInfo/>}/>
                <Route path="/country/:countryName" element={<CountryDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;