import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from "../context/ThemeContext";
import LoaderComponent from "./LoaderComponent";
function CountryDetailComponent(props){
    const country = useParams();
    const {theme} = useContext(ThemeContext)
    return (
        props.countries.length !== 0 ? 
        <div className={"h-100-vh " + (theme ? 'light-gray' : 'bg-dark-blue')}>
            <Link to="/">
            <div className={"ml-14 mt-16 inline-block pt-2 pb-2 pr-8 pl-8 shadow-md rounded-lg ff-NS-300 " + (theme ? 'text-black bg-white shadow-c-white ' : 'elem-dark-blue text-white shadow-c-dark')}>
                <FontAwesomeIcon icon="arrow-left" />&nbsp;&nbsp;Back
            </div>
            </Link>
            <div>
                {
                    props.countries.map(ctr => {
                    
                     return   ctr.name.common === country.country && 
                        <div className="grid grid-cols-2 ml-16 mt-16" key={ctr.name.common}>
                            <div className="col-span-2 md:col-span-1">
                                <img src={ctr.flags.png} alt={country}></img>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h1 className={"text-3xl ff-NS-800 mb-5 md:mt-0 mt-10 " + (theme ? 'text-black' : 'text-white')}>{ctr.name.common}</h1>
                                <div className="grid grid-cols-2 text-dark-gray-c">
                                    <div className="col-span-1">
                                        <p className={theme ? 'text-black' : 'text-white'}><span className="ff-NS-800 mb-1">Native Name :</span> {ctr.name.nativeName[Object.keys(ctr.name.nativeName)[0]].common}</p>
                                        <p className={theme ? 'text-black' : 'text-white'}><span className="ff-NS-800 mb-1">Population :</span> {ctr.population}</p>
                                        <p className={theme ? 'text-black' : 'text-white'}><span className="ff-NS-800 mb-1">Region :</span> {ctr.region}</p>
                                        <p className={theme ? 'text-black' : 'text-white'}><span className="ff-NS-800 mb-1">Sub Region :</span> {ctr.subregion}</p>
                                        <p className={theme ? 'text-black' : 'text-white'}><span className="ff-NS-800">Capital :</span> {ctr.capital}</p>
                                    </div>
                                <div className="col-span-2 md:col-span-1">
                                    <p className={theme ? 'text-black' : 'text-white'}><span className="ff-NS-800 mb-1">Top Level Domain :</span> {ctr.tld}</p>
                                    <p className={theme ? 'text-black' : 'text-white'}><span className="ff-NS-800 mb-1">Currencies :</span> {ctr.currencies[Object.keys(ctr.currencies)[0]].name}</p>
                                    <p className={theme ? 'text-black' : 'text-white'}><span className="ff-NS-800 mb-1">Languages :</span>{Object.keys(ctr.languages).map((language,index) =>{return index !== Object.keys(ctr.languages).length -1 ? <span key={language}>{ctr.languages[language]}, </span> : <span key={language}>{ctr.languages[language]} </span>})}</p>
                                </div>
                            
                            <div className={"col-span-2 mt-4 mr-16 " + (!theme ? 'text-white' : 'text-black')}>
                            <span className="ff-NS-800">Border Countries : </span>
                                {ctr.borders ? ctr.borders.map(border => {
                                   const countries =   props.countries.filter(country => country.cca3.includes(border))[0].name.common;
                                   return <span key={border} className={"inline-block pt-1 pb-1 pl-3 pr-3 ml-2 mb-2 rounded-md " + (theme ? 'shadow-c-white bg-white' : 'shadow-c-dark elem-dark-blue')}>{countries}</span>
                                }) : <span> None</span>}
                            </div>
                                </div>

                            </div>


                        </div>
                    })
                }
            </div>
            {props.countries.filter(ctr => ctr.name.common === country.country).length === 0 && <div className="min-w-full justify-center flex">
                <div className={"w-11/12 h-100-vh mt-5 ff-NS-600 flex justify-center flex-col items-center rounded-xl " + (theme ? 'bg-white shadow-c-white text-black' : 'elem-dark-blue shadow-c-dark text-white')}>
                    <h1 className="text-6xl" >404</h1>
                    
                    <p className="text-lg align-middle"> <FontAwesomeIcon icon="times" />&nbsp; This country doesn't exist</p>
                </div>
                </div>}
        </div>
        :
        <div className="h-100-vh min-w-full flex justify-center items-center light-gray">
        <LoaderComponent/>
        </div>
    )
}
export default CountryDetailComponent