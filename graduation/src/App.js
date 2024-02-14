import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Favorites from './Components/Favorites';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
        </div>
          );
}

export default App;
