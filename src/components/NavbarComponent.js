import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar(){
    const {toggleTheme,theme} = useContext(ThemeContext)
    return (
        <div className="shadow-md">
        <nav className={theme ? "shadow-md  bg-white border-gray-200 p-4 sm:px-4 dark:bg-gray-900  border-bottom-light-gray" : "elem-dark-blue border-gray-200 p-4 sm:px-4 dark:bg-gray-900  border-bottom-light-gray "}>
  <div className={" flex flex-wrap justify-between items-center mx-auto" + (theme ? ' text-dark' : ' text-white')}>
        <span className="sm:ml-10 ml-0 ff-NS-800">Where in the world? </span>
    <div className="sm:mr-16 mr-10 md:block md:w-auto" id="navbar-default">
    {theme ? <span className="cursor-pointer" onClick={() => toggleTheme(theme)}> <FontAwesomeIcon icon={['far','moon']} />&nbsp; Dark Mode</span>: <span className="cursor-pointer" onClick={() => toggleTheme(theme)}><FontAwesomeIcon icon="moon" />&nbsp; Dark Mode</span>}
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar