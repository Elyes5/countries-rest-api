import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
function CountryComponent(props){
    const navigate = useNavigate();
    const navigateRoute = () =>{
        navigate(`/${props.name}`)
    }
    const {theme} = useContext(ThemeContext)
    return (
        <div className={"md:col-span-4 sm:col-span-6 col-span-12 lg:col-span-3 mr-16 mb-24 rounded-lg shadow-lg overflow-hidden cursor-pointer " + (theme ? 'bg-white' : 'elem-dark-blue')} onClick={() => navigateRoute()}>
            <div>
                <img src={props.flag} alt={props.name} className="min-w-full h-48"></img>
            </div>
            <div className="p-8">
                <h1 className={"ff-NS-800 mb-4 text-lg " + (theme ? 'text-black' : 'text-white')}>{props.name}</h1>
                <div className="ff-NS-600">
                    <p><span className={"ff-NS-800 " + (theme ? 'text-dark-gray-c1' : 'text-white')}>Population :</span> <span className={"ff-NS-300 " + (theme ? 'text-dark-gray-c1' : 'text-white')}>{props.population}</span></p>
                    <p><span className={"ff-NS-800 " + (theme ? 'text-dark-gray-c1' : 'text-white')}>Region :</span>  <span className={"ff-NS-300 " + (theme ? 'text-dark-gray-c1' : 'text-white')}>{props.region}</span></p>
                    <p><span className={"ff-NS-800 " + (theme ? 'text-dark-gray-c1' : 'text-white')}>Capital :</span> <span className={"ff-NS-300 " + (theme ? 'text-dark-gray-c1' : 'text-white')}>{props.capital}</span></p>
                </div>
            </div>
        </div>
    )
}
export default CountryComponent