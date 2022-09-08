import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faSearch } from '@fortawesome/free-solid-svg-icons'
  import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
  import { faTimes } from '@fortawesome/free-solid-svg-icons';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
  import { faMoon } from '@fortawesome/free-solid-svg-icons';
  import { far } from '@fortawesome/free-regular-svg-icons';

  library.add(faSearch,faAngleDown,faArrowLeft,faMoon,far,faTimes)
function App() {
  return (
    <BrowserRouter>
    <div className="h-100-vh">
      <MainComponent/>
    </div>
    </BrowserRouter>
  );
}

export default App;
