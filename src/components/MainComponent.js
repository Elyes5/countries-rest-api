import { Route } from "react-router-dom"
import CountriesComponent from "./CountriesComponent"
import CountryDetailComponent from "./CountryDetailComponent"
import { Routes } from "react-router-dom"
import { useEffect,useState } from "react";
import Navbar from "./NavbarComponent"
import ThemeContextProvider from "../context/ThemeContext";
function MainComponent(){
    const [countries,setCountries] = useState([])
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(countries => {setLoading(false);setCountries(countries)})},[])

    return (
        <div className="h-100-vh">
            <ThemeContextProvider>
                <Navbar/>


            <Routes>
                
                    <Route exact path="/" element = {<CountriesComponent countries={countries} loading={loading}/>}/>
                    <Route exact path="/:country" element = { <CountryDetailComponent countries={countries}/> }/>
               
            </Routes>
            </ThemeContextProvider>
        </div>
    )
}
export default MainComponent