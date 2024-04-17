import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Home from './Components/Home';
import Favorites from './Components/Favorites';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat'
import ProjectDetails from './Components/Project/ProjectDetails'
import About_Profile from "./Components/About_Profile"
import Get_Started from './Components/Get_Started'
import Login from './Components/Login/Login'
import Forget_password from './Components/Forget_pass'
import StudentProfile from './Components/StudentProfile/StudentProfile'


import HomeStudent from './Components2/Home/Home'
import StudentAssignments from './Components2/StudentAssignments/StudentAssignments'
import Upload from './Components2/Upload/Upload'


import HomeDocter from './Components3/Home/Home'
import Attendance from './Components3/Attendance/Attendance'
import ProjectsSt from './Components3/ProjectsSt/ProjectsSt'
import Proje from './Components3/ProjectDetails/ProjectDetails'


function App() {

const[show, setShow] = useState(3)
  return (
    <div className="App">
      <BrowserRouter>
        <>
          {/* <Routes>
            <Route exact path="/" element={<Get_Started />} />
            <Route exact path= "/Login" element={<Login />} />
            <Route exact path= "/Forget_password" element={<Forget_password />} />
          </Routes> */}
        </>
        <>
          <div className='link'>
            <Sidebar />

            {/* Gist */}
            {show === 1 &&
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Chat" element={<Chat />} />
                <Route exact path="/Favorites" element={<Favorites />} />
                <Route exact path= "/ContactUs" element={<ContactUs />} />
                <Route exact path= "/ProjectDetails" element={<ProjectDetails />} />
                <Route exact path= "/About_Profile" element={<About_Profile />} />
                <Route exact path= "/StudentProfile" element={<StudentProfile />} />
              </Routes>
            }

            {/* Student */}
            {show === 2 &&
              <Routes>
                <Route exact path="/" element={<HomeStudent />} />
                <Route exact path= "/StudentAssignments" element={<StudentAssignments />} />
                <Route exact path= "/Upload" element={<Upload />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Chat" element={<Chat />} />
                <Route exact path="/Favorites" element={<Favorites />} />
                <Route exact path= "/ContactUs" element={<ContactUs />} />
                <Route exact path= "/ProjectDetails" element={<ProjectDetails />} />
                <Route exact path= "/About_Profile" element={<About_Profile />} />
                <Route exact path= "/StudentProfile" element={<StudentProfile />} />
              </Routes>
            }

            {/* Doctr */}
            {show === 3 &&
              <Routes>
                <Route exact path="/" element={<HomeDocter />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Chat" element={<Chat />} />
                <Route exact path="/Favorites" element={<Favorites />} />
                <Route exact path= "/ContactUs" element={<ContactUs />} />
                <Route exact path= "/ProjectDetails" element={<ProjectDetails />} />
                <Route exact path= "/About_Profile" element={<About_Profile />} />
                <Route exact path= "/StudentProfile" element={<StudentProfile />} />
                <Route exact path= "/Attendance" element={<Attendance />} />
                <Route exact path= "/ProjectsSt" element={<ProjectsSt />} />
                <Route exact path= "/Proje" element={<Proje />} />
              </Routes>
            }
          </div>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Components/Home';
// import Favorites from './Components/Favorites';
// import ContactUs from './Components/ContactUs';
// import About from './Components/About';

// function App() {
//   return (
//     <div className="App">
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/favorites' element={<Favorites />} />
//           {/* <Route path='/chat' element={<Chat />} /> */}
//           <Route path='/about' element={<About />} />
//           <Route path='/contactUs' element={<ContactUs />} />
//         </Routes>
//         </div>
//           );
// }

// export default App;
