import { useState,useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoaderComponent from "./LoaderComponent";
import CountryComponent from "./CountryComponent";
import { ThemeContext } from "../context/ThemeContext";
function CountriesComponent(props){
    const {theme} = useContext(ThemeContext)
    const [cnt,setCnt] = useState('');
    const [open,setOpen] = useState(false);
    const [inputData,setInputData] = useState('')
    const filterByInput = e => {
            return props.countries.filter(country => country.region.toLowerCase().includes(cnt.toLowerCase())  && country.name.common.toLowerCase().includes(e.toLowerCase()))
    }
    const continents = [{
        name : 'Africa'
    },
    {
        name : 'America'
    },
    {
        name : 'Asia'
    },
    {
        name : 'Europe'
    },
    {
        name : 'Oceania'
    },

]
    return(
        <div className={theme ? "h-100-vh light-gray" : "h-100-vh bg-dark-blue"}>
            
           { props.loading ? <div className="justify-center items-center flex h-100-vh"><LoaderComponent/></div> : (<div>
            <div className="grid grid-cols-12">
                <div className="mt-16 col-span-12 md:col-span-6 grid grid-cols-12 ">
                    <div className="col-span-10 ">
                        <div className={"ml-10 pt-4 pb-4 pr-5 pl-5 rounded-lg shadow-md" + (!theme ? ' elem-dark-blue' : ' bg-white')}>
                            <span className={"md:mr-7 mr-5" + (theme ? ' text-light-gray' : ' text-white')}><FontAwesomeIcon icon="search" /></span>
                            <input placeholder="search for country..." value={inputData} onChange={event =>{setInputData(event.target.value)}} name="search-country" className={"outline-none ff-NS-600" +  (!theme ? ' elem-dark-blue placeholder-white text-white' : ' bg-white')} type="text"/>
                        </div>
                        
                    </div>
                </div>
                <div className="mt-16 col-span-12 md:col-span-6 flex md:flex-row-reverse items-start md:ml-0 ml-10 cursor-pointer" onClick={() => setOpen(!open)}>
                    <div name="filter-continent"  className={"ff-NS-600 p-4 mr-16 relative rounded-lg pr-20 shadow-md" + (!theme ? ' elem-dark-blue' : ' bg-white')}>
                    <FontAwesomeIcon icon="angle-down" className={"absolute right-3 top-5 cursor-pointer" + (theme ? ' text-black' : ' text-white')} />
                        <div className={"flex justify-between" + (theme ? ' text-black' : ' text-white')}>{cnt === '' ? 'Filter by Region': cnt} </div>
                        <div className={"absolute top-16 pb-3 pt-3 bg-white min-w-full left-0 rounded-lg " + ( open ? '' : ' hidden ') + (theme ? 'bg-white' : ' elem-dark-blue text-white')}>
                        {
                            continents.map(continent => <div onClick={() => {setCnt(continent.name);setOpen(false)}} className="pl-5 pr-2 pb-1 cursor-pointer" key={continent.name} value={continent.name}>{continent.name}</div>)
                        }
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="ml-10 grid grid-cols-12 mt-16">
                
                {
                    
                    filterByInput(inputData).length > 0 ? filterByInput(inputData).map(country => <CountryComponent key={country.name.common} population={country.population} name={country.name.common} flag={country.flags.png} region={country.region} capital={country.capital}/>) : <div className={"h-100-vh rounded-xl flex justify-center items-center col-span-12 mr-16 ff-NS-600 text-3xl mb-5" + (theme ? ' bg-white' : ' text-white elem-dark-blue')}>No results were found</div>
                }    
            </div>

           </div>)
            }
        </div>
    )
}
export default CountriesComponent