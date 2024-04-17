import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import pic1 from '../images/about1.jpeg'
import pic2 from '../images/about2.jpeg'
import pic3 from '../images/about3.jpeg'
import pic4 from '../images/about4.jpeg'
import pic5 from '../images/about5.jpeg'
import pic6 from '../images/about6.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './About.css';
import { addNa, addName } from "./Redux/AboutSlice";


function About() {
    const dispatch = useDispatch();

    const peoples = [
        { id: 0, image: pic1, name: 'mohammed', description: 'Contemporary design and well-made products are things that we think everybody should' },
        { id: 1, image: pic2, name: 'ali', description: 'Contemporary design and well-made products are things that we think everybody should' },
        { id: 2, image: pic3, name: 'ahmed', description: 'Contemporary design and well-made products are things that we think everybody should' },
        { id: 3, image: pic4, name: 'gamal', description: 'Contemporary design and well-made products are things that we think everybody should' },
        { id: 4, image: pic5, name: 'abdulrahmen', description: 'Contemporary design and well-made products are things that we think everybody should' },
        { id: 5, image: pic6, name: 'gamal', description: 'Contemporary design and well-made products are things that we think everybody should' },
    ];

    const handleClick = (id) => {
        dispatch(addName({id}));
    };
    
    const handl = (name) => {
        dispatch(addNa({name}));
    };
    return (
        <div className="about">
            <p className="paragraph">The creative team behind the door</p>
            <div className='box'>
                {peoples.map((person) => (
                    <Link to={"/About_Profile"}>
                    <div className="image" key={person.id} onClick={() => handleClick(person.id)}>
                        <img src={person.image} alt="" />
                        <span className='span' onClick={() => handl(person.name)}>{person.name}</span>
                        <p className='p'>{person.description}</p>

                            <i onClick={() => handleClick(person.id)}><FontAwesomeIcon icon={faArrowRight} /></i>
                    </div>
                     </Link>

                ))}
            </div>
        </div>
    );
}

export default About;
// import './About.css';
// import React, { useEffect, useState } from "react";
// import pic1 from '../images/about1.jpeg'
// import pic2 from '../images/about2.jpeg'
// import pic3 from '../images/about3.jpeg'
// import pic4 from '../images/about4.jpeg'
// import pic5 from '../images/about5.jpeg'
// import pic6 from '../images/about6.jpeg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { addUser } from './Redux/AboutSlice';

// function About() {

//     const dispatch = useDispatch()
//     const[name, setName] = useState('')
//     function hendel (id) {
//         setName(id)
//         // dispatch(addUser({name}))
//     }

//     useEffect(() => {
//         dispatch(addUser({name}))
//         console.log(name)
//     }, [name])

//     const Peoples = [
//         {id: 0, image: pic1, name: 'mohammed', discrpation: 'Contemporary design and well-made products are things that we think everybody should'},
//         {id: 1, image: pic2, name: 'ali', discrpation: 'Contemporary design and well-made products are things that we think everybody should'},
//         {id: 2, image: pic3, name: 'ahmed', discrpation: 'Contemporary design and well-made products are things that we think everybody should'},
//         {id: 3, image: pic4, name: 'gamal', discrpation: 'Contemporary design and well-made products are things that we think everybody should'},
//         {id: 4, image: pic5, name: 'abdulrahmen', discrpation: 'Contemporary design and well-made products are things that we think everybody should'},
//         {id: 5, image: pic6, name: 'gamal', discrpation: 'Contemporary design and well-made products are things that we think everybody should'},
//     ];
//     return (
//         <div className="about">
//                 <p className="pragraph">The creative team behind the door</p>
//                 <div className='box'>
//                 {Peoples.map((e, i) =>
//                     <div className="image">
//                         <img src={e.image} alt="" />
//                         <span className='span'>{e.name}</span>
//                         <p className='p'>{e.discrpation}</p>
//                         <Link to={"/About_Profile"}>
//                             <i onClick={() => hendel(e.id)}><FontAwesomeIcon icon={faArrowRight} /></i>
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
// export default About;

// function About(){
//     return(
//     <div className="about">
//     <div class="header">
//     <span class="Register">Register</span>
//     <div class="icon-register">
//         <span class="Register-photo">
//             <i class="far fa-bell"></i>
//             <div class="Notices">
//                 <span class="note">
//                     <span>24</span>
//                 </span>
//             </div>
//         </span>
//     </div>
//     <div class="container">
//         <input type="text" name="name" class="input-search" placeholder="Search e.g"/>
//         <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
//     </div>
// </div>
// <div class="navbar">
//     <ul class="nav">
//         <li class="home"> <i class="fa-solid fa-house"></i> Home</li>
//         <li class="mycourses"> <i class="fa-regular fa-calendar-check"></i> My Courses</li>
//         <li class="chat"> <i class="fa-regular fa-message"></i> Chat</li>
//         <li class="fav"> <i class="fa-solid fa-bookmark"></i> Favorites</li>
//         <li class="setting"> <i class="fa-solid fa-gear"></i> Setting</li>
//         <li class="about"> <i class="fa-solid fa-user"></i> About</li>
//     </ul>
//     <div class="container-btn">
//         <input type="button" value="logout" class="logout"/>
//         <div class="icon-btn"><i class="fa-solid fa-right-to-bracket"></i></div>
//     </div>
// </div>
// <div class="parent">
//     <span class="pragraph">The creative team behind the door</span>
// </div>
// <div class="parent-s">
//     <div class="div-1">All Team</div>
//     <div class="div-2">UI/UX Design</div>
//     <div class="div-3">Product Management</div>
//     <div class="div-4">Branding Design</div>
//     <div class="div-5">Mobile Development</div>
//     <div class="div-6">Web Development</div>
// </div>
// <div class="jenny-1">
//     <div class="pic-1">
//         <img src="/images/pic1.jpeg" alt=""/>
//         <div class="span">Amira Khaled</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-2">
//     <div class="pic-2">
//         <img src="/images/pic2.jpeg" alt=""/>
//         <div class="span">Lamiaa Younes</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-3">
//     <div class="pic-3">
//         <img src="/images/pic3.jpeg" alt=""/>
//         <div class="span">Eslam abdelhamied</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-4">
//     <div class="pic-4">
//         <img src="/images/pic4.jpeg" alt=""/>
//         <div class="span">Abdelrahman</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-5">
//     <div class="pic-5">
//         <img src="/images/pic5.jpeg" alt=""/>
//         <div class="span">Mervat Maher</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-6">
//     <div class="pic-6">
//         <img src="/images/pic6.jpeg" alt=""/>
//         <div class="span">youssef</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-7">
//     <div class="pic-7">
//         <img src="/images/pic7.jpeg" alt=""/>
//         <div class="span">Merna Yasser</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-8">
//     <div class="pic-8">
//         <img src="/images/pic8.jpeg" alt=""/>
//         <div class="span">Shahd Salah</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-9">
//     <div class="pic-9">
//         <img src="/images/pic2.jpeg" alt=""/>
//         <div class="span">Sara Ahmed</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-10">
//     <div class="pic-10">
//         <img src="/images/pic7.jpeg" alt=""/>
//         <div class="span">Shimaa Mahmoud</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-11">
//     <div class="pic-11">
//         <img src="/images/pic8.jpeg" alt=""/>
//         <div class="span">Ashraket</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// <div class="jenny-12">
//     <div class="pic-12">
//         <img src="/images/pic3.jpeg" alt=""/>
//         <div class="span">Mohamed Hassan</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// //end people
// //start people
// <div class="jenny-13">
//     <div class="pic-13">
//         <img src="/images/pic4.jpeg" alt="" />
//         <div class="span">Mohamed Radi</div>
//         <i class="fa-solid fa-quote-left"></i>
//         <p> Contemporary design and well-made products are things that we think everybody should</p>
//         <div class="arrow"><i class="fa-solid fa-circle-arrow-right"></i></div>
//     </div>
// </div>
// </div>);    
// }
// export default About;