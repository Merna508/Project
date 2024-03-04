import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Favorites from './Components/Favorites';
import ContactUs from './Components/ContactUs';
import About from './Components/About';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          {/* <Route path='/chat' element={<Chat />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contactUs' element={<ContactUs />} />
        </Routes>
        </div>
          );
}

export default App;
