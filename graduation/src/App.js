import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Favorites from './Components/Favorites';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <div className="App">
      <Home />
      <div className='row'>
        <div className='col-2 sidebar'>
        <Sidebar />
        </div>
        <div className='col-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
        </div>
        </div>
    </div>
  );
}

export default App;
